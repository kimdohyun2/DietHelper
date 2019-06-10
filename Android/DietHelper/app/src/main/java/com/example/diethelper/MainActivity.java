package com.example.diethelper;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.NonNull;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;
import androidx.appcompat.app.AppCompatActivity;

import android.view.MenuItem;
import android.view.View;

public class MainActivity extends AppCompatActivity{

    public static final String Fragment_first = "fragment_first";
    public static final String Fragment_second = "fragment_second";

    @Override
    protected void onCreate(final Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        /*FragmentManager fm = getSupportFragmentManager();
        final FragmentTransaction fragmentTransaction = fm.beginTransaction();*/
        final android.app.FragmentTransaction ft = getFragmentManager().beginTransaction();
        BottomNavigationView bottomNavigationView = findViewById(R.id.bottom_navigation_view);

        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @SuppressLint("ResourceType")
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem menuItem) {
                switch (menuItem.getItemId()) {

                    case R.id.navigation_menu1:
                        Fragment diary = DiaryFragment.newInstance();
                        FragmentManager fm = getSupportFragmentManager();
                        FragmentTransaction fragmentTransaction = fm.beginTransaction();
                        fragmentTransaction.replace(R.id.frame_layout, diary);
                        fragmentTransaction.commit();
                        break;
                    case R.id.navigation_menu2:
                        Intent camera = new Intent(MainActivity.this, CameraActivity.class);
                        startActivity(camera);
                        break;
                    case R.id.navigation_menu3:
                        break;
                }
                return false;
            }

            private void replaceFragment(Fragment fragment, String tmp) {
                FragmentManager fragmentManager = getSupportFragmentManager();
                FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
                fragmentTransaction.add(R.id.frame_layout, fragment,tmp);
                fragmentTransaction.commit();
            }
        });
    }
    SYsysys
}
