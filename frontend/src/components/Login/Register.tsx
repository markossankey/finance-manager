import { Button, Form, Input } from "antd";
import { useLocation } from "react-router-dom";

const { Item: FormItem } = Form;

export const Register = () => {
  const { state } = useLocation();
  const { firstName, lastName, email, sub } = state ?? {};

  return (
    <div style={{ width: "50%" }}>
      <h2>Sign-up</h2>
      <form
        method="POST"
        action={`http://localhost:${
          import.meta.env.VITE_DEV_BACKEND_PORT
        }/api/auth/register`}
      >
        <FormItem
          label="First Name"
          colon={false}
          labelCol={{ span: 24 }}
          htmlFor="firstName"
        >
          <Input
            name="firstName"
            type="text"
            id="firstName"
            style={{ width: "100%" }}
            defaultValue={firstName}
          />
        </FormItem>
        <FormItem
          label="Last Name"
          colon={false}
          labelCol={{ span: 24 }}
          htmlFor="lastName"
        >
          <Input
            name="lastName"
            type="text"
            id="lastName"
            style={{ width: "100%" }}
            defaultValue={lastName}
          />
        </FormItem>
        <FormItem
          label="Email"
          colon={false}
          labelCol={{ span: 24 }}
          htmlFor="email"
        >
          <Input
            name="email"
            type="text"
            id="email"
            style={{ width: "100%" }}
            defaultValue={email}
          />
        </FormItem>
        <FormItem hidden>
          <Input
            hidden
            name="sub"
            type="text"
            id="sub"
            style={{ width: "100%" }}
            defaultValue={sub}
          />
        </FormItem>
        <Button htmlType="submit" style={{ width: "100%", marginTop: "2rem" }}>
          Sign-up
        </Button>
      </form>
    </div>
  );
};
