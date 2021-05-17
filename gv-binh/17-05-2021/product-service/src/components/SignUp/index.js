import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
const layout = {
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${name} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const SignUp = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Form
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "username"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="User name" />
        </Form.Item>
        <Form.Item
          name={["user", "firstname"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="First name" />
        </Form.Item>
        <Form.Item
          name={["user", "lastname"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Last name" />
        </Form.Item>
        <Form.Item
          name={["user", "password"]}
          rules={[
            {
              type: "password",
            },
          ]}
        >
          <Input placeholder="Password" />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;


