"use client";

import styles from "./FileInput.module.scss";
import { useRef } from "react";

function FileInput(): JSX.Element {
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const onCickImageHandler = (): void => {
    imageInputRef.current?.click();
  };

  return (
    <>
      <div className={styles.container}>
        <div
          onClick={() => {
            onCickImageHandler();
          }}
          className={styles.fileInput}
        >
          이미지 수정
        </div>
        <div className={styles.deleteFile}>이미지 제거</div>
        <input
          ref={imageInputRef}
          type="file"
          name="file"
          className={styles.inputNone}
        />
      </div>
    </>
  );
}

export default FileInput;
