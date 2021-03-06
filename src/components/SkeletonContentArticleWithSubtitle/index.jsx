import { SkeletonItem } from "../../styles-components/SkeletonItem";

const SkeletonContentArticleWithSubtitle = ({ quantityTextItems, justify }) => {
  return (
    <>
      {justify === "left" && (
        <>
          <SkeletonItem
            height="20px"
            width="50%"
            borderRadius="6px"
            otherStyles="margin-bottom:5px"
          />
          <SkeletonItem
            height="8px"
            width="20%"
            borderRadius="6px"
            otherStyles="margin-bottom:20px"
          />
          {quantityTextItems >= 1 && (
            <SkeletonItem width="95%" otherStyles="margin-left:30px" />
          )}
          {quantityTextItems > 1 &&
            Array.from({ length: quantityTextItems }, (_, i) => i + 1).map(
              (item) => (
                <SkeletonItem
                  key={`text${item}`}
                  width={`${Math.random() * (100 - 80) + 80}%`}
                />
              )
            )}
          {quantityTextItems > 1 && (
            <SkeletonItem width={`${Math.random() * (50 - 10) + 10}%`} />
          )}
        </>
      )}

      {justify === "center" && (
        <>
          <SkeletonItem
            height="20px"
            width="50%"
            borderRadius="6px"
            margin="0 auto 5px auto;"
          />
          <SkeletonItem
            height="8px"
            width="20%"
            borderRadius="6px"
            margin="0 auto 20px auto;"
          />
          {quantityTextItems >= 1 && (
            <SkeletonItem
              width="95%"
              otherStyles="margin-left:auto;margin-right:auto;"
            />
          )}
          {quantityTextItems > 1 &&
            Array.from({ length: quantityTextItems }, (_, i) => i + 1).map(
              (item) => (
                <SkeletonItem
                  key={`text${item}`}
                  width={`${Math.random() * (100 - 80) + 80}%`}
                  otherStyles="margin-left:auto;margin-right:auto;"
                />
              )
            )}
          {quantityTextItems > 1 && (
            <SkeletonItem
              width={`${Math.random() * (50 - 10) + 10}%`}
              otherStyles="margin-left:auto;margin-right:auto;"
            />
          )}
        </>
      )}

      {justify === "right" && (
        <>
          <SkeletonItem
            height="20px"
            width="50%"
            borderRadius="6px"
            margin="0 0 5px auto;"
          />
          <SkeletonItem
            height="8px"
            width="20%"
            borderRadius="6px"
            margin="0 0 20px auto;"
          />
          {quantityTextItems >= 1 && (
            <SkeletonItem width="95%" otherStyles="margin-left:auto" />
          )}
          {quantityTextItems > 1 &&
            Array.from({ length: quantityTextItems }, (_, i) => i + 1).map(
              (item) => (
                <SkeletonItem
                  key={`text${item}`}
                  width={`${Math.random() * (100 - 80) + 80}%`}
                  otherStyles="margin-left:auto"
                />
              )
            )}
          {quantityTextItems > 1 && (
            <SkeletonItem
              width={`${Math.random() * (50 - 10) + 10}%`}
              otherStyles="margin-left:auto"
            />
          )}
        </>
      )}
    </>
  );
};

export default SkeletonContentArticleWithSubtitle;
