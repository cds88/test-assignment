import { Flex } from "@chakra-ui/react";

const MinifigWrapper = Flex;

/**
 * Component repreenting particular Lego Minifig
 * @param param0 
 * @returns {React.Element}
 */
export default function MinifigComponent({
  element,
  minifigWrapper,
  selected,
  ...Props
}) {
  return (
    <MinifigWrapper className="  rounded-lg  p-10" {...minifigWrapper}>
      <img
        src={element.set_img_url}
        height={100}
        style={{
           margin: 20,
           transition:'box-shadow 0.2s ease-in-out',
           boxShadow: selected? '10px 10px 50px 20px orange' : null
          }}

      />
    </MinifigWrapper>
  );
}
