import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
export default function ClipboardMenu({
  open,
  handleClose,
  options,
  anchorEl,
  id, // this is required by the onClick event passed by the ScheduleCard
}) {
  //   const [anchorEl, setAnchorEl] = useState(null);
  return (
    <Menu
      id="long-menu"
      MenuListProps={{
        "aria-labelledby": "long-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          maxHeight: "3rem",
          width: "20ch",
        },
      }}
    >
      {options.map(({ label, onClick }) => (
        <MenuItem key={label} onClick={() => onClick(id)}>
          {label}
        </MenuItem>
      ))}
    </Menu>
  );
}
