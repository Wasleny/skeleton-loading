import SkeletonContent from "./components/SkeletonContent";
import SkeletonContentArticle from "./components/SkeletonContentArticle";
import SkeletonContentArticleWithSubtitle from "./components/SkeletonContentArticleWithSubtitle";
import SkeletonContentComment from "./components/SkeletonContentComment";
import SkeletonContentFeed from "./components/SkeletonContentFeed";
import SkeletonContentWithImage from "./components/SkeletonContentWithImage";
import SkeletonContentWithPerfil from "./components/SkeletonContentWithPerfil";
import { SkeletonItem } from "./styles-components/SkeletonItem";

const App = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 30%)",
        gap: "10px",
        justifyContent: "center",
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <h3>SkeletonContent</h3>
        <SkeletonContent>
          <SkeletonItem height="50px" width="50px" borderRadius="100%" />
          <SkeletonItem />
          <SkeletonItem />
        </SkeletonContent>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <h3>SkeletonContentArticle</h3>
        <SkeletonContentArticle quantityTextItems="3" justify="center" />
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <h3>SkeletonContentArticleWithSubtitle</h3>
        <SkeletonContentArticleWithSubtitle
          quantityTextItems="3"
          justify="right"
        />
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <h3>SkeletonContentComment</h3>
        <SkeletonContentComment justify="left" />
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <h3>SkeletonContentFeed</h3>
        <SkeletonContentFeed />
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <h3>SkeletonContentWithImage</h3>
        <SkeletonContentWithImage
          quantityImageItems="2"
          quantityTextItems="4"
          justify="center"
        />
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <h3>SkeletonContentWithPerfil</h3>
        <SkeletonContentWithPerfil quantityTextItems="4" justify="left" />
      </div>
    </div>
  );
};

export default App;
