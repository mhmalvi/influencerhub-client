import { Menu } from "antd";
import { Link } from "react-router-dom";
import Icons from "../Icons";

export const brandMenu = (
  <Menu
    style={{
      backgroundColor: "black !important",
    }}
    className="rounded-3xl top-2"
    items={[
      {
        label: (
          <Link to={"/brand-profile"} className="font-mulish leading-5">
            Profile
          </Link>
        ),
        key: "0",
      },
      {
        label: (
          <Link to={"/brand-profile"} className="font-mulish leading-5">
            Dashboard
          </Link>
        ),
        key: "1",
      },
      {
        label: (
          <Link to={"/create-campaign"} className="font-mulish leading-5">
            Create Campaign
          </Link>
        ),
        key: "2",
      },
    ]}
  />
);
export const creatorMenu = (
  <Menu
    className="rounded-3xl top-2"
    items={[
      {
        label: (
          <Link to={"/creator-profile"} className="font-mulish leading-5">
            Profile
          </Link>
        ),
        key: "0",
      },
      {
        label: (
          <Link to={"/creator-dashboard"} className="font-mulish leading-5">
            Dashboard
          </Link>
        ),
        key: "1",
      },
      {
        label: (
          <Link to={"/campaigns"} className="font-mulish leading-5">
            Find camping
          </Link>
        ),
        key: "2",
      },
    ]}
  />
);

export const studioMenu = (
  <Menu
    className="rounded-3xl top-2"
    items={[
      {
        label: (
          <Link
            to={"/studio/content-solution"}
            className="font-mulish leading-5"
          >
            Content solution
          </Link>
        ),
        key: "0",
      },
      {
        label: (
          <Link to={"/studio/video-solution"} className="font-mulish leading-5">
            Video production
          </Link>
        ),
        key: "1",
      },
      {
        label: (
          <Link
            to={"/studio/design-solution"}
            className="font-mulish leading-5"
          >
            Socail & print design
          </Link>
        ),
        key: "2",
      },
      {
        label: (
          <Link to={"/studio/event-solution"} className="font-mulish leading-5">
            Event management
          </Link>
        ),
        key: "3",
      },
    ]}
  />
);

export const insightMenu = (
  <Menu
    className="rounded-3xl top-2"
    items={[
      {
        label: (
          <Link to={"/work-showcase"} className="font-mulish leading-5">
            Work showcase
          </Link>
        ),
        key: "0",
      },
      {
        label: (
          <Link to={"/blog"} className="font-mulish leading-5">
            Blog
          </Link>
        ),
        key: "1",
      },
      {
        label: (
          <Link to={"/case-study"} className="font-mulish leading-5">
            Case studies
          </Link>
        ),
        key: "2",
      },
      {
        label: (
          <Link to={"/academy"} className="font-mulish leading-5">
            Academy
          </Link>
        ),
        key: "3",
      },
    ]}
  />
);

export const profileMenu = (
  <Menu
    className="rounded-3xl top-2"
    items={[
      {
        icon: <Icons.Settings />,
        label: (
          <Link to={"/"} className="font-mulish leading-5">
            Account Setting
          </Link>
        ),
        key: "0",
      },
      {
        icon: <Icons.User />,
        label: (
          <Link to={"/creator-profile"} className="font-mulish leading-5">
            Profile
          </Link>
        ),
        key: "1",
      },
      {
        icon: <Icons.Wallet />,
        label: (
          <Link to={"/wallet"} className="font-mulish leading-5">
            Wallet
          </Link>
        ),
        key: "2",
      },
      {
        icon: <Icons.LogOut />,
        label: (
          <Link to={"/"} className="font-mulish leading-5">
            Log Out
          </Link>
        ),
        key: "3",
      },
    ]}
  />
);
