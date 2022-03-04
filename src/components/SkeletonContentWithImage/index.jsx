import { SkeletonItem } from "../../styles-components/SkeletonItem";

const SkeletonContentWithImage = ({
  quantityTextItems,
  quantityImageItems,
  justify,
}) => {
  return (
    <>
      {justify === "left" && (
        <>
          {quantityImageItems &&
            Array.from({ length: quantityImageItems }, (_, i) => i + 1).map(
              (item) => (
                <SkeletonItem
                  height="100px"
                  width="100px"
                  borderRadius="0"
                  otherStyles="margin-left:auto;margin-right:auto;margin-bottom:10px"
                  key={`format${item}`}
                />
              )
            )}

          {quantityTextItems &&
            Array.from({ length: quantityTextItems }, (_, i) => i + 1).map(
              (item) => (
                <SkeletonItem
                  key={`text${item}`}
                  width={`${Math.random() * (100 - 10) + 10}%`}
                />
              )
            )}
        </>
      )}

      {justify === "center" && (
        <>
          {quantityImageItems &&
            Array.from({ length: quantityImageItems }, (_, i) => i + 1).map(
              (item) => (
                <SkeletonItem
                  height="100px"
                  width="100px"
                  borderRadius="0"
                  otherStyles="margin-left:auto;margin-right:auto;margin-bottom:10px"
                  key={`format${item}`}
                />
              )
            )}
          {quantityTextItems &&
            Array.from({ length: quantityTextItems }, (_, i) => i + 1).map(
              (item) => (
                <SkeletonItem
                  key={`text${item}`}
                  width={`${Math.random() * (100 - 10) + 10}%`}
                  otherStyles="margin-left:auto;margin-right:auto;"
                />
              )
            )}
        </>
      )}

      {justify === "right" && (
        <>
          {quantityImageItems &&
            Array.from({ length: quantityImageItems }, (_, i) => i + 1).map(
              (item) => (
                <SkeletonItem
                  height="100px"
                  width="100px"
                  borderRadius="0"
                  otherStyles="margin-left:auto;margin-right:auto;margin-bottom:10px"
                  key={`format${item}`}
                />
              )
            )}
          {quantityTextItems &&
            Array.from({ length: quantityTextItems }, (_, i) => i + 1).map(
              (item) => (
                <SkeletonItem
                  key={`text${item}`}
                  width={`${Math.random() * (100 - 10) + 10}%`}
                  otherStyles="margin-left:auto;"
                />
              )
            )}
        </>
      )}
    </>
  );
};

export default SkeletonContentWithImage;
