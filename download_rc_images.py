from ddgs import DDGS
import urllib.request
import time

cars = {
    "xo1": "Traxxas XO-1 rc supercar",
    "limitless": "Arrma Limitless V2 rc roller",
    "infraction": "Arrma Infraction 6S V2 truck",
    "vte2": "Hobao VTE2 extreme speed run",
    "x4": "Xray X4 2024 touring car",
    "mi8": "Schumacher Mi8 touring car",
    "a800r": "Awesomatix A800R touring car",
    "stx": "WRC Racing STX touring car",
    "xmaxx": "Traxxas X-Maxx 8S monster truck",
    "maxx": "Traxxas Maxx 4S monster truck",
    "kraton8s": "Arrma Kraton 8S BLX",
    "kronos": "Corally Kronos XTR monster truck",
    "mt410": "Tekno MT410 2.0 monster truck",
    "lmt": "Losi LMT solid axle monster truck",
    "clodbuster": "Tamiya Clod Buster rc monster truck",
    "madforce": "Kyosho Mad Force rc truck",
    "xb8": "Xray XB8 2024 buggy",
    "mbx8r": "Mugen MBX8R eco buggy",
    "rc8b4": "Team Associated RC8B4e buggy",
    "8ightx": "TLR 8IGHT-X/E buggy",
    "nb48": "Tekno EB48 2.1 buggy",
    "s354": "Sworkz S35-4e buggy",
    "mp10": "Kyosho Inferno MP10e buggy",
    "a319": "Agama A319E buggy",
    "udr": "Traxxas Unlimited Desert Racer UDR",
    "superbajarey": "Losi Super Baja Rey 2.0",
    "mojave": "Arrma Mojave 6S BLX",
    "trx4": "Traxxas TRX-4 Defender rc",
    "scx10": "Axial SCX10 III Jeep",
    "enduro": "Element RC Enduro Sendero",
    "vs410": "Vanquish VS4-10 Phoenix",
    "avante": "Tamiya Avante 2011 rc"
}

ddgs = DDGS()

for cid, query in cars.items():
    img_path = f"public/images/{cid}.jpg"
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
