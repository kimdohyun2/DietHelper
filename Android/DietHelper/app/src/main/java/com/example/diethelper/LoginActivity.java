package com.example.diethelper;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.diethelper.util.CreateDB;
import com.example.diethelper.util.DataBaseHelper;

import java.net.URL;

public class LoginActivity extends AppCompatActivity {
    Cursor cursor;
    CreateDB newDB;
    Context context;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_login);

        EditText idText = findViewById(R.id.idText);
        EditText passwordText = findViewById(R.id.passwordText);

        Button loginButton = (Button) findViewById(R.id.loginButton);
        TextView registerButton = (TextView) findViewById(R.id.registerButton);
        try {
            newDB = new CreateDB(this);
            newDB.createDatabase();
            DataBaseHelper myDB = new DataBaseHelper(this);
            cursor = myDB.readDB("SELECT * FROM FoodNutrition;");
            if(cursor.moveToNext()){
                String test1 = cursor.getString(0);
                idText.setText(test1);
            }
        }catch(Exception e){
            throw new Error("Error Database");
        }

            registerButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent registerintent = new Intent(LoginActivity.this, RegisterActivity.class);
                LoginActivity.this.startActivity(registerintent);
            }
        });

        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent main = new Intent(LoginActivity.this, MainActivity.class);
                LoginActivity.this.startActivity(main);
            }
        });
    }
}