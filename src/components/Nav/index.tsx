import {
  NavSection,
  NavContainer,
  NavList,
  NavListItem,
  NavBtn,
  NavLogo,
  SearchBar,
} from "./navStyle";

import Button from "../../styles/Button";

function Nav() {
  return (
    <>
      <NavSection>
        <NavContainer>
          <NavLogo>
            <img src="/nav-logo.png" alt="experanto logo" />
          </NavLogo>
          <SearchBar>
            <input
              type="text"
              placeholder="What language would you like to search for today ?"
            />
            <button type="button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_102)">
                  <path
                    d="M17.6134 15.5152C19.0658 13.5332 19.7163 11.0759 19.4348 8.6349C19.1533 6.19389 17.9605 3.94918 16.095 2.34987C14.2295 0.750556 11.829 -0.0854205 9.37362 0.00918925C6.91825 0.103799 4.58915 1.12202 2.85227 2.86014C1.1154 4.59825 0.098846 6.92809 0.00599324 9.38352C-0.0868595 11.839 0.750834 14.2389 2.35148 16.1032C3.95213 17.9676 6.19769 19.1588 8.6389 19.4386C11.0801 19.7183 13.5369 19.066 15.5179 17.6122H15.5164C15.5614 17.6722 15.6094 17.7292 15.6634 17.7847L21.4384 23.5597C21.7196 23.8411 22.1012 23.9993 22.4991 23.9995C22.897 23.9996 23.2787 23.8417 23.5601 23.5604C23.8416 23.2792 23.9998 22.8976 23.9999 22.4997C24.0001 22.1018 23.8421 21.7201 23.5609 21.4387L17.7859 15.6637C17.7322 15.6094 17.6746 15.5592 17.6134 15.5137V15.5152ZM18.0004 9.74917C18.0004 10.8326 17.787 11.9054 17.3724 12.9063C16.9578 13.9072 16.3501 14.8167 15.584 15.5828C14.8179 16.3489 13.9084 16.9566 12.9075 17.3712C11.9066 17.7858 10.8338 17.9992 9.75037 17.9992C8.66696 17.9992 7.59417 17.7858 6.59323 17.3712C5.5923 16.9566 4.68282 16.3489 3.91674 15.5828C3.15066 14.8167 2.54297 13.9072 2.12836 12.9063C1.71376 11.9054 1.50037 10.8326 1.50037 9.74917C1.50037 7.56114 2.36956 5.46272 3.91674 3.91554C5.46391 2.36837 7.56233 1.49917 9.75037 1.49917C11.9384 1.49917 14.0368 2.36837 15.584 3.91554C17.1312 5.46272 18.0004 7.56114 18.0004 9.74917Z"
                    fill="#1C2026"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_102">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </SearchBar>

          <NavList>
            <li>
              <NavListItem to={"/post"}>
                <NavBtn>Post</NavBtn>
              </NavListItem>
            </li>
            <li>
              <Button type="button">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.50001 1.49986C7.17201 1.49986 5.09001 2.56036 3.71451 4.22686C3.65309 4.30647 3.57629 4.37292 3.48867 4.42225C3.40106 4.47158 3.30442 4.50279 3.2045 4.51403C3.10458 4.52526 3.00342 4.51629 2.90703 4.48764C2.81065 4.459 2.72101 4.41127 2.64345 4.34728C2.56588 4.2833 2.50198 4.20437 2.45553 4.11519C2.40908 4.02602 2.38103 3.92841 2.37306 3.82817C2.36509 3.72794 2.37736 3.62713 2.40913 3.53173C2.4409 3.43633 2.49153 3.3483 2.55801 3.27286C3.6563 1.94315 5.1134 0.956877 6.75601 0.431344C8.39862 -0.0941888 10.1576 -0.136864 11.8238 0.308394C13.4899 0.753653 14.9932 1.66811 16.1546 2.94299C17.3161 4.21788 18.087 5.79954 18.3755 7.49986H16.85C16.5037 5.80607 15.5831 4.28385 14.2438 3.19058C12.9046 2.09731 11.2288 1.50007 9.50001 1.49986ZM2.15001 10.4999C2.43398 11.8868 3.10454 13.1651 4.08423 14.1871C5.06392 15.209 6.31275 15.933 7.68646 16.2753C9.06016 16.6176 10.5027 16.5642 11.8473 16.1214C13.192 15.6786 14.384 14.8644 15.2855 13.7729C15.3469 13.6933 15.4237 13.6268 15.5113 13.5775C15.599 13.5281 15.6956 13.4969 15.7955 13.4857C15.8954 13.4745 15.9966 13.4834 16.093 13.5121C16.1894 13.5407 16.279 13.5885 16.3566 13.6524C16.4341 13.7164 16.498 13.7954 16.5445 13.8845C16.5909 13.9737 16.619 14.0713 16.627 14.1715C16.6349 14.2718 16.6227 14.3726 16.5909 14.468C16.5591 14.5634 16.5085 14.6514 16.442 14.7269C15.3437 16.0566 13.8866 17.0428 12.244 17.5684C10.6014 18.0939 8.84241 18.1366 7.17625 17.6913C5.51009 17.2461 4.00687 16.3316 2.8454 15.0567C1.68392 13.7818 0.913064 12.2002 0.624512 10.4999H2.15001Z"
                    fill="#1C2026"
                  />
                </svg>
                <p>EN</p>
              </Button>
            </li>

            <li>
              <NavListItem to={"/signout"}>
                <NavBtn>Log out</NavBtn>
              </NavListItem>{" "}
              <NavListItem to={"/profile"}>
                <div>
                  <img src="/nav-profile.png" alt="profile" />
                </div>
              </NavListItem>
            </li>
          </NavList>
        </NavContainer>
      </NavSection>
    </>
  );
}

export default Nav;
