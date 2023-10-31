import styles from "./InputFileAndButtonContainer.module.scss";
import { Button } from "@mui/material";

function InputFileAndButtonContainer(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <input type="file" />
        <Button variant="contained" className={styles.uploadButton}>
          업로드
        </Button>
      </div>
    </>
  );
}

export default InputFileAndButtonContainer;
