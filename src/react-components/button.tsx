import { ButtonStyle, buttonStyle } from "../theme/button.css"

// required since interfaces cannot extend types whose properties are not statically known
type buttonStyle = ButtonStyle & Record<string, unknown>

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  buttonStyle {
  header: string
  fullWidth?: boolean
  className?: string
}

export const Button = ({
  header: title,
  size,
  variant,
  fullWidth,
  className,
  ...props
}: ButtonProps): JSX.Element => (
  <div className={className}>
    <button
      // className={buttonStyle({ size, variant })}
      className={`${buttonStyle({ size })} capitalize inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-black rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none`}
      style={{ width: fullWidth ? "100%" : "auto" }}
      {...props}
    >
      {title}
    </button>
  </div>
)
