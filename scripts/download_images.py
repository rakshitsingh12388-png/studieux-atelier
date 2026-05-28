"""
Run this script to download all images from Figma directly into public/images/
Usage: python3 scripts/download_images.py YOUR_FIGMA_TOKEN

Get token: https://www.figma.com/settings → Personal Access Tokens
"""
import sys, os, urllib.request, json

FILE_KEY = "C0sUJUnWZchwaic2MvrNuO"

IMAGE_NODES = {
    "I10:25;30:278": "hero-landing", "157:328": "golf-green-01",
    "159:350": "golf-green-02", "159:349": "golf-green-03",
    "159:353": "golf-green-04", "231:395": "golf-green-05",
    "79:22": "studio-hero", "172:272": "hideaway-01",
    "244:423": "hideaway-02", "244:427": "hideaway-03",
    "172:275": "hideaway-04", "172:296": "edifice-01",
    "172:299": "edifice-03", "172:344": "altus-01",
    "172:345": "altus-02", "172:346": "altus-03",
    "239:343": "altus-04", "172:347": "altus-05",
    "172:364": "elemento-01", "172:365": "elemento-02",
    "172:366": "elemento-03", "172:367": "elemento-04",
    "172:384": "mysticfox-01", "172:385": "mysticfox-02",
    "172:386": "mysticfox-03", "172:387": "mysticfox-04",
    "172:692": "interlock-01", "172:693": "interlock-02",
    "172:694": "interlock-03", "248:368": "interlock-04",
    "172:480": "sfm-01", "172:481": "sfm-02",
    "172:482": "sfm-03", "172:483": "sfm-04",
    "172:500": "farzi-01", "172:501": "farzi-02",
    "172:502": "farzi-03", "172:503": "farzi-04",
    "172:652": "ostello-01", "172:653": "ostello-02",
    "172:654": "ostello-03", "172:655": "ostello-04",
    "172:632": "disha-01", "172:633": "disha-02",
    "172:634": "disha-03", "172:635": "disha-04",
    "172:832": "dazzleberry-01", "172:833": "dazzleberry-02",
    "172:834": "dazzleberry-03", "172:835": "dazzleberry-04",
    "172:732": "brickhouse-01", "172:733": "brickhouse-02",
    "172:735": "brickhouse-03", "288:300": "brickhouse-04",
    "172:872": "rivulet-01", "172:873": "rivulet-02",
    "172:874": "rivulet-03", "172:875": "rivulet-04",
    "172:792": "mittal-01", "172:793": "mittal-02",
    "172:794": "mittal-03", "172:795": "mittal-04",
    "172:520": "grouphousing-01", "172:521": "grouphousing-02",
    "172:522": "grouphousing-03", "172:523": "grouphousing-04",
    "172:540": "saujan-01", "172:541": "saujan-02",
    "172:542": "saujan-03", "172:543": "saujan-04",
    "172:560": "sadana-01", "172:561": "sadana-02",
    "172:562": "sadana-03", "172:563": "sadana-04",
    "I131:330;131:246": "gallery-01", "I131:333;131:249": "gallery-02",
    "I131:336;131:252": "gallery-03", "I131:331;131:247": "gallery-04",
    "I131:334;131:250": "gallery-05", "I131:329;131:244": "gallery-06",
    "I131:332;131:248": "gallery-07", "I131:335;131:251": "gallery-08",
    "I131:328;131:244": "gallery-09", "I136:402;131:246": "gallery-10",
    "I136:405;131:246": "gallery-11", "I136:408;131:252": "gallery-12",
    "I136:403;131:247": "gallery-13", "I136:406;131:250": "gallery-14",
    "I136:401;131:246": "gallery-15", "I136:404;131:248": "gallery-16",
    "I136:407;131:251": "gallery-17", "I136:400;131:244": "gallery-18",
    "I308:313;131:246": "gallery-19", "I308:314;131:251": "gallery-20",
    "I308:312;131:244": "gallery-21", "I308:319;131:246": "gallery-22",
    "I308:320;131:251": "gallery-23", "I308:318;131:244": "gallery-24",
}

def download_images(token):
    output_dir = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')
    os.makedirs(output_dir, exist_ok=True)
    node_ids = list(IMAGE_NODES.keys())
    for i in range(0, len(node_ids), 20):
        batch = node_ids[i:i+20]
        ids_param = ','.join(batch)
        url = f"https://api.figma.com/v1/images/{FILE_KEY}?ids={ids_param}&format=png&scale=1"
        req = urllib.request.Request(url, headers={'X-Figma-Token': token})
        try:
            with urllib.request.urlopen(req) as resp:
                data = json.loads(resp.read())
                for node_id, img_url in data.get('images', {}).items():
                    if not img_url: continue
                    name = IMAGE_NODES.get(node_id)
                    if not name: continue
                    fpath = os.path.join(output_dir, f"{name}.png")
                    urllib.request.urlretrieve(img_url, fpath)
                    print(f"OK {name}.png")
        except Exception as e:
            print(f"Error: {e}")
    print("Done!")

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/download_images.py YOUR_FIGMA_TOKEN")
        sys.exit(1)
    download_images(sys.argv[1])
