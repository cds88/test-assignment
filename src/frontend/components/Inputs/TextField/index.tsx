import { Input } from "@chakra-ui/react";
import { useFormContext, useController } from "react-hook-form";
import { get_validators } from "../../../../backend/utils/validators";
/**
 * Simple text input with label
 * Validation is made with use of useFormContext hook from react-hook-form
 * @param Props
 * @returns
 */

export default function TextField(Props: TextFieldInterface) {
  const { label, name, validators } = Props;
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<FormInterface>();

  const error = errors?.[name]?.message;

  return (
    <div className="w-full p-2">
      <div className="py-2">
        <span className="font-bold">{label}</span>
      </div>
      <Input
        width={"100%"}
        textColor={"black"}
        fontWeight={700}
        {...register(name, {
          validate: get_validators(validators),
        })}
        background="white"
      />
      {error && (
        <div className="pt-2">
          <span className="text-red-500">{error}</span>
        </div>
      )}
    </div>
  );
}
