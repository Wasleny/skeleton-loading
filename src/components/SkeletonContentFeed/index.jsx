import { SkeletonItem } from "../../styles-components/SkeletonItem";

const SkeletonContentFeed = () => {
  return (
    <>
      <SkeletonItem
        height="50px"
        width="50px"
        borderRadius="100%"
        otherStyles="display:inline-block"
      />
      <SkeletonItem
        width={`${Math.random() * (100 - 10) + 10}%`}
        height="8px"
        otherStyles="display:inline-block"
      />
      <SkeletonItem
        width={`${Math.random() * (100 - 10) + 10}%`}
        height="8px"
        otherStyles="display:inline-block"
      />

      <SkeletonItem width="300px" height="200px" borderRadius="0" />

      <SkeletonItem
        width={`${Math.random() * (100 - 10) + 10}%`}
        height="8px"
        otherStyles="display:inline-block"
      />
    </>
  );
};

export default SkeletonContentFeed;
