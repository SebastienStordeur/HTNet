import React from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import InputValidator from "../Inputvalidator/InputValidator";
import Label from "./Label";

const CreateEmployeeForm: React.FC = () => {
  const handleChange = () => {};
  return (
    <form className="max-w-[1110px] px-8 mt-20 mx-auto grid grid-cols-2 gap-8">
      <div className="bg-blue w-full h-auto p-8">
        <InputValidator>
          <Label htmlFor="firstName">
            FirstName
            <Input
              id="firstName"
              name="firstName"
              type="text"
              value=""
              onChange={handleChange}
              onBlur={handleChange}
            />
          </Label>
        </InputValidator>
        <InputValidator>
          <Label htmlFor="name">
            Last Name
            <Input
              id="name"
              name="name"
              type="text"
              value=""
              onChange={handleChange}
              onBlur={handleChange}
            />
          </Label>
        </InputValidator>
        <InputValidator>
          <Label htmlFor="birth">
            Date of birth
            <Input
              id="birth"
              name="birth"
              type="date"
              value=""
              onChange={handleChange}
              onBlur={handleChange}
            />
          </Label>
        </InputValidator>
        <InputValidator>
          <Label htmlFor="startDate">
            Start Date
            <Input
              id="start"
              name="startDate"
              type="date"
              value=""
              onChange={handleChange}
              onBlur={handleChange}
            />
          </Label>
        </InputValidator>
      </div>
      <div className="bg-blue w-full h-auto p-8">
        <h2 className="text-white font-bold uppercase text-2xl">Address</h2>
        <InputValidator>
          <Label htmlFor="street">
            Street
            <Input
              id="street"
              name="street"
              type="text"
              value=""
              onChange={handleChange}
              onBlur={handleChange}
            />
          </Label>
        </InputValidator>
        <InputValidator>
          <Label htmlFor="city">
            <Input
              id="city"
              name="city"
              type="text"
              value=""
              onChange={handleChange}
              onBlur={handleChange}
            />
          </Label>
        </InputValidator>
        <InputValidator>
          <Label htmlFor="state">
            State
            <Input
              id="state"
              name="state"
              type="date"
              value=""
              onChange={handleChange}
              onBlur={handleChange}
            />
          </Label>
        </InputValidator>
        <InputValidator>
          <Label htmlFor="zip">
            Zip Code
            <Input
              id="zip"
              name="zip"
              type="number"
              value=""
              onChange={handleChange}
              onBlur={handleChange}
            />
          </Label>
        </InputValidator>
      </div>
      <div className="relative">
        <Button>Save</Button>
      </div>
    </form>
  );
};

export default CreateEmployeeForm;
