import { iconName, useDynamicSvgImport } from "./hooks/useDymnamicSvgImport";

interface IProps {
  iconName: iconName;
  wrapperStyle?: string;
  svgProp?: React.SVGProps<SVGSVGElement>;
}

export const SvgIcon = (props: IProps) => {
  const { iconName, wrapperStyle, svgProp } = props;
  const { loading, SvgIcon } = useDynamicSvgImport(iconName);

  return (
    <>
      {loading && (
        <div className="rounded-full bg-slate-400 h-8 w-8"></div>
      )}
      {SvgIcon && (
        <div className={wrapperStyle}>
          <SvgIcon {...svgProp} />
        </div>
      )}
    </>
  );
}
