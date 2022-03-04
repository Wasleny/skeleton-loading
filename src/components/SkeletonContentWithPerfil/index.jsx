import { SkeletonItem } from "../../styles-components/SkeletonItem";

const SkeletonContentWithPerfil = ({ quantityTextItems, justify }) => {
  return (
    <>
      {justify === "left" && (
        <>
          <SkeletonItem
            height="50px"
            width="50px"
            borderRadius="100%"
            otherStyles="display:inline-block"
          />
          {quantityTextItems &&
            Array.from({ length: quantityTextItems }, (_, i) => i + 1).map(
              (item) => (
                <SkeletonItem
                  key={`text${item}`}
                  width={`${Math.random() * (100 - 10) + 10}%`}
                  height="8px"
                  otherStyles="display:inline-block"
                />
              )
            )}
        </>
      )}

      {justify === "center" && (
        <>
          <SkeletonItem
            height="50px"
            width="50px"
            borderRadius="100%"
            otherStyles="margin-left:auto;margin-right:auto;margin-bottom:10px"
          />
          {quantityTextItems &&
            Array.from({ length: quantityTextItems }, (_, i) => i + 1).map(
              (item) => (
                <SkeletonItem
                  key={`text${item}`}
                  width={`${Math.random() * (100 - 10) + 10}%`}
                  height="8px"
                  otherStyles="margin-left:auto;margin-right:auto;"
                />
              )
            )}
        </>
      )}

      {justify === "right" && (
        <>
          <SkeletonItem
            height="50px"
            width="50px"
            borderRadius="100%"
            otherStyles="margin-left:auto;margin-bottom:10px;"
          />
          {quantityTextItems &&
            Array.from({ length: quantityTextItems }, (_, i) => i + 1).map(
              (item) => (
                <SkeletonItem
                  key={`text${item}`}
                  width={`${Math.random() * (50 - 10) + 10}%`}
                  height="8px"
                  otherStyles="margin-left:auto;"
                />
              )
            )}
        </>
      )}
    </>
  );
};

export default SkeletonContentWithPerfil;
