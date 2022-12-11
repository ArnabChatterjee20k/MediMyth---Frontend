import PrimaryLink from "../components/Link/PrimaryLink";
import { PrimaryButton } from "../components/ui/Buttons";
const data =[
    {label:"Home",link:"/"},
    {label:"Search",link:"/search"}
]
export const PageLinks = [...data.map((e)=><PrimaryLink key={e.label} to={e.link}>{e.label}</PrimaryLink>),<PrimaryButton component={PrimaryLink} to="/doctor/profile">Doctor</PrimaryButton>];