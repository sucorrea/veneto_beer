import { ReactNode, useCallback, useMemo } from "react";

import { Visibility } from "@mui/icons-material";
import Box from "@mui/material/Box";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";

type IconButtonTooltipProps = {
  onClick?: () => void;
  exibirTooltip?: boolean;
  textoTooltip?: string;
  icon?: ReactNode;
  disabled?: boolean;
  props?: {
    propsTooltip?: TooltipProps;
    propsIconButton?: IconButtonProps;
  };
  disablePaddingIconButton?: boolean;
};

const IconButtonTooltip = ({
  onClick,
  exibirTooltip = true,
  textoTooltip = "Detalhes",
  icon,
  disabled = false,
  disablePaddingIconButton = false,
  ...props
}: IconButtonTooltipProps) => {
  const handleClickDetalhes = () => {
    if (onClick) {
      onClick();
    }
  };

  const renderIcon = useCallback(() => {
    if (icon) {
      return <>{icon}</>;
    }
    return <Visibility />;
  }, [icon]);

  const tooltipText = useMemo(
    () => (disabled ? "" : textoTooltip),
    [disabled, textoTooltip]
  );

  const styleIconButton = disablePaddingIconButton ? { p: 0, m: 0 } : {};
  return (
    <>
      {exibirTooltip ? (
        <Tooltip title={tooltipText} {...props}>
          <Box>
            <IconButton
              {...props}
              onClick={handleClickDetalhes}
              disabled={disabled}
              sx={styleIconButton}
            >
              {renderIcon()}
            </IconButton>
          </Box>
        </Tooltip>
      ) : (
        <IconButton
          {...props}
          onClick={handleClickDetalhes}
          disabled={disabled}
        >
          <>{icon}</>
        </IconButton>
      )}
    </>
  );
};

export default IconButtonTooltip;
