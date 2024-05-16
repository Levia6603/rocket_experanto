import { LanguageFilter, FilterItem } from "./styles";

function LanguageFilterComponent() {
  return (
    <LanguageFilter>
      <p>熱門語言</p>
      <ul>
        <li>
          <FilterItem>
            <input type="checkbox" />
            <p>
              English <span>(17)</span>
            </p>
          </FilterItem>
        </li>
        <li>
          <FilterItem>
            <input type="checkbox" />
            <p>
              English <span>(17)</span>
            </p>
          </FilterItem>
        </li>
        <li>
          <FilterItem>
            <input type="checkbox" />
            <p>
              English <span>(17)</span>
            </p>
          </FilterItem>
        </li>
        <li>
          <FilterItem>
            <input type="checkbox" />
            <p>
              English <span>(17)</span>
            </p>
          </FilterItem>
        </li>
      </ul>
      <input type="button" value="...更多" />
    </LanguageFilter>
  );
}

export default LanguageFilterComponent;
