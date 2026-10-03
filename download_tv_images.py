import os
from ddgs import DDGS
import urllib.request
import time

tvs = {
    "lgg4": "LG OLED G4 TV product shot front view full screen",
    "lgc4": "LG OLED C4 TV front view full screen",
    "samsungs95d": "Samsung S95D OLED TV front view full screen",
    "samsungs90d": "Samsung S90D TV front view full screen",
    "sonya95l": "Sony A95L QD-OLED TV front view full screen",
    "sonya80l": "Sony Bravia A80L OLED front view full screen",
    "panamz2000": "Panasonic MZ2000 OLED TV front view full screen",
    "philips908": "Philips OLED+908 TV front view full screen",
    
    "samsungqn900d": "Samsung QN900D 8K TV front view full screen",
    "samsungqn90d": "Samsung QN90D Neo QLED front view full screen",
    "tclqm8": "TCL QM8 Mini-LED TV front view full screen",
    "tclc845": "TCL C845 TV front view full screen",
    "hisenseu8k": "Hisense U8K Mini-LED front view full screen",
    "hisenseu7k": "Hisense U7K TV front view full screen",
    "sonyx95l": "Sony X95L Mini LED TV front view full screen",
    "lgqned85": "LG QNED85 TV front view full screen",
    
    "samsungcu8000": "Samsung CU8000 Crystal UHD front view full screen",
    "lgur8000": "LG UR8000 TV front view full screen",
    "sonyx85l": "Sony X85L TV front view full screen",
    "tclq6": "TCL Q6 QLED TV front view full screen",
    "hisensea6k": "Hisense A6K TV front view full screen",
    "philipstheone": "Philips The One 8808 TV front view full screen",
    "panamx700": "Panasonic MX700 TV front view full screen",
    "viziomq6": "Vizio MQ6 TV front view full screen",
    
    "samsungthewall": "Samsung The Wall MicroLED TV front view full screen",
    "lgm3": "LG Signature OLED M3 front view full screen",
    "sonyz9k": "Sony Z9K 8K TV front view full screen",
    "beovisionharmony": "Bang & Olufsen Beovision Harmony front view full screen",
    "lgrx": "LG Rollable OLED RX front view full screen",
    "samsungtheframe": "Samsung The Frame TV front view full screen",
    "loewebildi": "Loewe Bild i TV front view full screen",
    "cseedn1": "C-Seed N1 TV front view full screen"
}

ddgs = DDGS()
os.makedirs("public/images/fernseher", exist_ok=True)

for cid, query in tvs.items():
    img_path = f"public/images/fernseher/{cid}.jpg"
    print(f"Downloading {cid} via DDGS...", flush=True)
    try:
        results = list(ddgs.images(query, max_results=3))
        if not results:
            print(f"  No results for {cid}", flush=True)
            continue
        
        for res in results:
            url = res.get("image")
            try:
                req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
                data = urllib.request.urlopen(req, timeout=5).read()
                with open(img_path, 'wb') as f:
                    f.write(data)
                print(f"  Saved {cid}!", flush=True)
                break
            except Exception as e:
                print(f"  Failed {url}", flush=True)
    except Exception as e:
        print(f"  DDGS Error: {e}", flush=True)
    time.sleep(1)
