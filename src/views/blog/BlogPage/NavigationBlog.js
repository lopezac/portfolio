import { useQueryParams } from "Hooks";
import { getNumArray } from "Utils/helper";
import { GrayAnchorLink, WhiteAnchorLink } from "Assets/styles/Link";
import { FlexList } from "Assets/styles/List";
import { FlexRowCenter } from "Assets/styles/Wrapper";

export default function NavigationBlog() {
  let { page } = useQueryParams();
  if (!page) page = 1;

  return (
    <FlexRowCenter>
      <FlexList>
        {getNumArray(1, 10).map((num) => {
          return (
            <li key={num}>
              {num == page ? (
                <WhiteAnchorLink href={`/blog?page=${num}`}>
                  {num}
                </WhiteAnchorLink>
              ) : (
                <GrayAnchorLink href={`/blog?page=${num}`}>
                  {num}
                </GrayAnchorLink>
              )}
            </li>
          );
        })}
      </FlexList>
    </FlexRowCenter>
  );
}
