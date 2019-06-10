package com.example.diethelper.util;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class DataBaseHelper extends SQLiteOpenHelper {
    private static String DB_NAME = "DietHelperData.db";

    public DataBaseHelper(Context context) {
        super(context,DB_NAME,null,1);
    }

    @Override
    public void onCreate(SQLiteDatabase db) { }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) { }

    public Cursor readDB(String sql){
        SQLiteDatabase database = this.getReadableDatabase();
        return database.rawQuery(sql , null);
    }
}
