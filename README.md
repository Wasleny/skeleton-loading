## Components
- SkeletonContent
- SkeletonContentArticle
- SkeletonContentArticleWithSubtitle
- SkeletonContentComment
- SkeletonContentFeed
- SkeletonContentWithImage
- SkeletonContentWithPerfil

## Online Examples
<a href="https://skeleton-loading-chi.vercel.app/">Click here!</a>

## Components and Props

|Component|Props|Possible Values|
|---|---|---|
|SkeletonContent|children, quantityTextItems|quantityTextItems={int}|
|SkeletonContentArticle|quantityTextItems, justify|quantityTextItems={int}, justify={left, center, right}|
|SkeletonContentArticleWithSubtitle|quantityTextItems, justify|quantityTextItems={int}, justify={left, center, right}|
|SkeletonContentComment|justify|justify={left, right}|
|SkeletonContentFeed|-|-|
|SkeletonContentWithImage|quantityImageItems, quantityTextItems, justify|quantityImageItems={int}, quantityTextItems={int}, justify={left, center, right}|
|SkeletonContentWithPerfil|quantityTextItems, justify|quantityTextItems={int}, justify={left, center, right}|

## Component-styled: SkeletonItem
### Props
- width
- height
- margin
- borderRadius
- otherStyles


## Example
- With children:

```
<SkeletonContent>
  <SkeletonItem
    height="50px"
    width="50px"
    borderRadius="100%"
    otherStyles="display:inline-block"
  />
</SkeletonContent>

```


