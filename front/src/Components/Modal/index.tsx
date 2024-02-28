import { ReactNode } from "react";

import Typography from "@mui/material/Typography";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";
import { Theme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: ReactNode;
} & DialogProps;

export const Modal = ({
  onClose,
  open,
  title,
  children,
  ...props
}: ModalProps) => (
  <Dialog open={open} onClose={onClose} {...props}>
    <DialogTitle>
      <Stack direction="row" justifyContent="space-between">
        <Typography
          variant="h6"
          component="h2"
          sx={{ color: (theme: Theme) => theme.palette.primary.main }}
        >
          {title}
        </Typography>
        <IconButton
          size="medium"
          disableRipple
          onClick={onClose}
          sx={{ padding: 0 }}
        >
          <Close fontSize="small" />
        </IconButton>

        <Divider />
      </Stack>
    </DialogTitle>
    <DialogContent>{children}</DialogContent>
  </Dialog>
);

export default Modal;
