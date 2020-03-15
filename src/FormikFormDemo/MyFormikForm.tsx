import React from "react";
//
import { TextField, Button} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
//
interface IValues {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  onSubmit: (values: IValues) => void;
}
export const MyFormikForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div>
            <Field name="firstName" placeholder="first name"/>
            <TextField
              placeholder="first name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div>
            <TextField
              placeholder="last name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              placeholder="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          {/* <pre>{JSON.stringify(values)}</pre> */}
          <Button type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
