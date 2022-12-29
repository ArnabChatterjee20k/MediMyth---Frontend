import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { SecondaryLogo } from "../Logo/SecondaryLogo";
import { grey } from "@mui/material/colors";
import { Link, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";

const LinkBox = styled(Paper)(({ theme }) => ({
  display: "flex",
  padding: "1em 2em",
  cursor: "pointer",
  transition: "100ms",
  "&:hover": {
    backgroundColor: grey[100],
  },
  "&:disabled": { backgroundColor: grey[600] },
}));
export default function AuthCard({
  label,
  links,
  alternateText,
  alternateLink,
}) {
  const { pathname } = useLocation();
  return (
    <Stack
      minWidth="100%"
      minHeight="100vh"
      alignItems="center"
      mt={10}
      gap={3}
    >
      <SecondaryLogo text={label} />
      <Stack gap={2}>
        {links.map(({ link, label, Icon }) => {
          return (
            <Link
              key={link}
              to={`${pathname}/${link}`}
              style={{ textDecoration: "none" }}
            >
              <LinkBox
                sx={{
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "flex-star",
                }}
              >
                {Icon}
                {label}
              </LinkBox>
            </Link>
          );
        })}
      </Stack>
      {alternateText && alternateLink && (
        <Link to={`${alternateLink}`} style={{ textDecoration: "none" }}>
          <Typography color="green">{alternateText}</Typography>
        </Link>
      )}
    </Stack>
  );
}
