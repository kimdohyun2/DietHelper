package com.example.diethelper;

        import android.os.Bundle;
        import androidx.appcompat.app.AppCompatActivity;
        import android.view.animation.Animation;
        import android.view.animation.AnimationUtils;
        import android.widget.ImageView;

public class Camloading extends AppCompatActivity {
    private ImageView imgAndroid;
    private Animation anim;

    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.progress_loading);

        initView();
    }
    private void initView(){
        imgAndroid = (ImageView) findViewById(R.id.img_android);
        anim = AnimationUtils.loadAnimation(this,R.anim.camloading);
        imgAndroid.setAnimation(anim);
    }
}
