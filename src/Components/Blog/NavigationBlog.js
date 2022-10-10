import UseQueryParams from "../Hooks/UseQueryParams";
import { getNumArray } from "../../Utils/helper";
import { GrayAnchorLink, WhiteAnchorLink } from "../../Assets/Styles/Link";
import { FlexList } from "../../Assets/Styles/List";
import { FlexRowCenter } from "../../Assets/Styles/Wrapper";

export default function NavigationBlog() {
  let { page } = UseQueryParams();
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