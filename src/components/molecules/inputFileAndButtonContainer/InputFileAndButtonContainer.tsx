import styles from "./InputFileAndButtonContainer.module.scss";
import { Button } from "@mui/material";

interface IProps {
  type: "button" | "reset" | "submit" | undefined;
}

function InputFileAndButtonContainer({ type }: IProps): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <input type="file" />
        <Button type={type} variant="contained" className={styles.uploadButton}>
          업로드
        </Button>
      </div>
    </>
  );
}

export default InputFileAndButtonContainer;
