const wdio = require("webdriverio");
const assert = require("assert");

//jest.setTimeout(80000);
let opts = {
  host: '127.0.0.1',
  port: 4723,
  path: '/wd/hub/',
  capabilities: {
    platformName: "Android",
    platformVersion: "11.0",
    deviceName: "Pixel 2",
    //app: "/data/app/base.apk",
    appPackage: "com.android.chrome",
    appActivity: "com.google.android.apps.chrome.Main",
    automationName: "UiAutomator2"
  }
};
//jest.setTimeout(120000);

async function main () {
    let client = await wdio.remote(opts);
    
    const aceptar = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/android.widget.FrameLayout/android.widget.Button");
    await aceptar.waitForDisplayed({ timeout: 30000 });
    await aceptar.click();

    const noGracias = await client.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[1]");
    await noGracias.waitForDisplayed({ timeout: 30000 });
    await noGracias.click();

   const  elem = await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText')
   await elem.waitForDisplayed({ timeout: 30000 });

    await elem.setValue('http://www.ebay.com');
    const  urlebay = await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.ListView/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.LinearLayout/android.widget.TextView[1]')
    await urlebay.waitForDisplayed({ timeout: 30000 });

    await urlebay.click()

    const  inputPilas = await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.view.View/android.widget.EditText')
    await inputPilas.waitForDisplayed({ timeout: 30000 });

    await inputPilas.setValue('Pilas');
    await client.keys('Enter');
    
    const  textResutadosPilas = await client.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View[5]/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View')
    await textResutadosPilas.waitForDisplayed({ timeout: 30000 });

    await textResutadosPilas.getText();

    console.log("ACA TRAE EL RESULTADO DE LAS PILAS",await textResutadosPilas.getText())
}

main();