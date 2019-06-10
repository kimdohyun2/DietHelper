package com.example.diethelper.util;

import android.content.Context;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

public class CreateDB {
    private Context myContext;
    private String DB_PATH;
    private String DB_NAME = "DietHelperData.db";
    private String myPath;

    public CreateDB(Context context) throws IOException {
        this.myContext=context;
        if(android.os.Build.VERSION.SDK_INT >= 17){
            this.DB_PATH = context.getApplicationInfo().dataDir + "/databases/";
        }
        else
        {
            this.DB_PATH = "/data/data/" + context.getPackageName() + "/databases/";
        }
        myPath = this.DB_PATH + this.DB_NAME;
    }

    public boolean isCheckDB() {
        File file = new File(this.myPath);

        if (file.exists()) {
            return true;
        }

        return false;
    }

    public void createDatabase() throws IOException {
        InputStream myInput;
        OutputStream myOutput;

        try {
            File folder = new File(this.DB_PATH);
            File file = new File(this.myPath);
            if (folder.exists()) {
            } else {
                folder.mkdirs();
            }

            if (file.exists()) {
                file.delete();
            }

            //Open your local db as the input stream
            myInput = myContext.getAssets().open(this.DB_NAME);
            //Open the empty db as the output stream
            myOutput = new FileOutputStream(this.myPath);

            BufferedInputStream bis = new BufferedInputStream(myInput);
            BufferedOutputStream bos = new BufferedOutputStream(myOutput);

            byte[] buffer = new byte[1024];
            int read = -1;
            while ((read = bis.read(buffer, 0, 1024)) != -1) {
                bos.write(buffer, 0, read);
            }

            bos.flush();
            bos.close();
            myOutput.close();
            bis.close();
            myInput.close();
        } catch(IOException e) {
            throw new Error("Error copying database");
        }
    }
}
