import React, { Component } from "react"
import User from "../../interfaces/user.interface"


interface SearchState {
    error: boolean,
    name: string,
    numberOfAbilites: number,
    baseExperience: number,
    imageUrl: string
}

// Define the type of props
export class PokemonSearch extends Component<User, SearchState> {
    pokemonRef: React.RefObject<HTMLInputElement>;
    constructor(props: User) {
        super(props);
        this.state = {
            error: false,
            name: '',
            numberOfAbilites: 0,
            baseExperience: 0,
            imageUrl: ''
        }
        this.pokemonRef = React.createRef();
    }

    onSearchClick = () => {
        const inputValue = 'aaaa'; //this.pokemonRef.current.value;

        fetch(`http://pokeapi.co/api/v2/pokemon/${inputValue}`)
            .then(res => {
                if (res.status !== 200) {
                    this.setState({ error: true });
                    return;
                }

                res.json().then(data=>{
                    this.setState({
                        error: false,
                        name: data.name,
                        numberOfAbilites: data.abilites.length,
                        baseExperience: data.base_expericenc,
                        imageUrl: data.sprites.front_default
                    })
                });
            });
    }

    render() {
        const { name:userName, numberOfPokemons } = this.props;
        const {error, name, numberOfAbilites, base_expericenc, imageUrl} = this.state;

        return (
            <div>
                <p>
                    User {userName} {' '}
                    {numberOfPokemons && <span>{numberOfPokemons} pokemons</span>}
                </p>
                <input type="text" ref={this.pokemonRef} />
                <button onClick={this.onSearchClick} className="my-button">
                    Search
            </button>
            </div>
        );
    }
}


export default PokemonSearch;   