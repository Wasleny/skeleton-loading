import { SkeletonItem } from "../../styles-components/SkeletonItem";

const SkeletonContentComment = ({ justify }) => {
  return (
    <>
      {justify === "left" && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <SkeletonItem
            height="80px"
            width="80px"
            borderRadius="100%"
            otherStyles="margin-bottom:5px"
          />
          <div style={{ width: "50%", padding: "10px" }}>
            <SkeletonItem
              height="8px"
              width="88%"
              otherStyles="margin-left:15%;"
            />
            {Array.from({ length: 3 }, (_, i) => i + 1).map((item) => (
              <SkeletonItem
                key={`text${item}`}
                height="8px"
                width="100%"
                otherStyles="margin-left:10px;"
              />
            ))}
            <SkeletonItem
              height="8px"
              width="20%"
              otherStyles="margin-left:10px;"
            />
          </div>
        </div>
      )}

      {justify === "right" && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "50%", padding: "10px" }}>
            <SkeletonItem
              height="8px"
              width="85%"
              otherStyles="margin-left:15%;"
            />
            {Array.from({ length: 3 }, (_, i) => i + 1).map((item) => (
              <SkeletonItem
                key={`text${item}`}
                height="8px"
                width="100%"
                otherStyles="margin-right:10px;"
              />
            ))}
            <SkeletonItem
              height="8px"
              width="20%"
              otherStyles="margin-right:10px;"
            />
          </div>
          <SkeletonItem height="80px" width="80px" borderRadius="100%" />
        </div>
      )}
    </>
  );
};

export default SkeletonContentComment;
