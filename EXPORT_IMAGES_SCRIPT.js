/**
 * FIGMA IMAGE EXPORT SCRIPT
 * Run this in the Figma Plugin console (via Figma > Plugins > Development > New Plugin)
 * OR use the Figma REST API with your personal access token
 * 
 * This exports all 78 unique images from the Studieux Atelier Figma file
 * and maps them to the correct filenames for the website.
 */

// Image hash to filename mapping (from Figma analysis)
const IMAGE_MAP = {
  // Hero / Landing
  'be02c8b98ec389061b06929b504c6004b40c518f': 'hero-landing',
  
  // Golf Green Residence
  '289bb7c3be3b6204c2b264de09d7891f3757be05': 'golf-green-01',
  '3bd9ae0dcc46ccdf163f8c04df09f44d75505f8f': 'golf-green-02',
  'fb7cd80918c69c0dfa219ed8d875a9d4305d60bd': 'golf-green-03',
  '1c0d381a1537f6a43156e8f3dbb49ff4d34d6b91': 'golf-green-04',
  '544a6a451131964820a3d9e82634c67bbdcf3dd6': 'golf-green-05',
  
  // Studio Hero
  'ffcd99c6b84162eda09934a23900ce896011b4c5': 'studio-hero',
  
  // The Hideaway
  'fed704d94a81b178188213a3110bff44f19ccae4': 'hideaway-01',
  '313dba58b7fe9fb3de83164d91d92e0258a265b5': 'hideaway-02',
  '3e23e9363cfccd7f397be01edf12bf176c27c22b': 'hideaway-03',
  'd237d6fea6923287b56b32337f4e5e733d25158e': 'hideaway-04',
  
  // Edifice
  'd31c4c423b0e8749068fbf141c6ac9b021a2ca80': 'edifice-01',
  'd31c4c423b0e8749068fbf141c6ac9b021a2ca80': 'edifice-02',
  
  // Altus House
  '46024272dfd89707e6e5723e7d88856d7e251732': 'altus-01',
  '074a67a84bb9eabb48064c124060e62e88238868': 'altus-02',
  'a212ec2467c090be368d590c2a1823b986b6f46e': 'altus-03',
  '8925d1d36f5647530ad4b74edbf736da1a0d5d47': 'altus-04',
  'e9de6db6aa6883494da93fc26f8c55965cf3bb20': 'altus-05',
  
  // The Interlock House
  'e519d570512b6d10a0170f6d932b7dfd660e43e7': 'interlock-01',
  '3ccd563edc2545ef2a0700d435f5b916e9c1e854': 'interlock-02',
  '7116f8cd5c438b9a74fa80e9040036b4c7dbcf26': 'interlock-03',
  '2d964d3320377fa338feb60e225553fc3106cdc6': 'interlock-04',
  
  // Mystic Fox
  '83d03bf2e63ef28331b553cd39b67cc506473c24': 'mysticfox-01',
  '5bd8962db10e3a64bc15f7e45b7d9dc0c9eba6d5': 'mysticfox-02',
  'c00dc98917872ca113acbf5d7f20af242dd9c960': 'mysticfox-03',
  '140b8567394d1bbe7c5a8db98a795e3f4fd1222a': 'mysticfox-04',
  
  // Dazzleberry  
  '3a0cad5b79d3b80611a4f2eb9c2c82aa6860f05c': 'dazzleberry-01',
  'b413d52cce13fb3850d1fda36be6a511efb630b7': 'dazzleberry-02',
  '33a8977b1b5cd2f869c418e073090df1a8094449': 'dazzleberry-03',
  'c5d00509d7e2e78616fa89ce4ac7d2fb36d1894c': 'dazzleberry-04',
  
  // Naturoville
  'be02c8b98ec389061b06929b504c6004b40c518f': 'naturoville-01',
  'd65b2ce3fa1e1f6344234c18b31a8abb00739966': 'naturoville-02',
  '27ed3b15ff7fddfae07bd3adc0e1a64838b79809': 'naturoville-03',
  
  // SFM Living
  '01ef5a9ca9b4902a9f43c2e5d1b0ce8b02557780': 'sfm-01',
  '9364c65ade2e48ef66754d6f7d45989b4a7ca5a8': 'sfm-02',
  'a36bd027f1ac1f87b7596c18c2b181d181bf6a05': 'sfm-03',
  '08751afd736d0f39558e3b6fcb6ee82fbf15ce83': 'sfm-04',
  
  // FARZI Cafe
  '9a8bd22bb67dc0ae87ae561ccc41d7f24f29eed9': 'farzi-01',
  '0ed6b7e6736fa3b828d44c6876a6751fce5f72f3': 'farzi-02',
  '1627f26331be872b9a9e6cbbe6c3053b9f859eff': 'farzi-03',
  '3988bf051143e51784aea7c4194ec47a4786f133': 'farzi-04',
  
  // Group Housing
  'e48dff4e83e4a7e9e7fe06cbf14fbbd13c531790': 'grouphousing-01',
  'd23da2ae2759545721cbcb9d25670a0f9949d56b': 'grouphousing-02',
  '13ea6cddbbb546f9e4d0467475a90a8f9c03d72b': 'grouphousing-03',
  '91345b67825cf107c697f2dad048f86bd8c75d39': 'grouphousing-04',
  
  // Sau Jan Estate
  '86118f805abe39e0ee2ccf7261b0f929ae7ad59d': 'saujan-01',
  'b36d84385dffd4290089947fd63e54b10598a8e2': 'saujan-02',
  'd42cfb33608397b606aabfca2da31f8c60bfac49': 'saujan-03',
  'e08c5b4ae48e9b33c886107f07b6e7d3301649f5': 'saujan-04',
  
  // Brick House
  '626a08107f6ee37625f7951c805af447426a224c': 'brickhouse-01',
  'c20469253c79ed7849cba93706c8b4a0860898e4': 'brickhouse-02',
  'e3d1a8aad55535cf82b3144da05dccd7342ec55e': 'brickhouse-03',
  '273dd8ad99c4778e38b84191a9da6b796c5dc21b': 'brickhouse-04',
  
  // Rivulet
  '15467c656a2c1539beccb01eae4e27c5ecf5dbb0': 'rivulet-01',
  '5f22ebec6bf5049f91eb12bb51a8526c5a15f00a': 'rivulet-02',
  'e04de96382551bc71b254201973f135ff89a9ff9': 'rivulet-03',
  '3747a4c01af5d8153c3cea252779e9b36f8b11d7': 'rivulet-04',
  
  // Mittal Residence
  '5260029bab1fa0960895cff96a679815b6d6ad4b': 'mittal-01',
  '543f01bcf31fd7825ecff143d25c50054bc889aa': 'mittal-02',
  '37cb3890aa7b885734f13aa2db22dbcf90398c28': 'mittal-03',
  '99924646d7f68ff165c41365a9ca64d0a4f5127f': 'mittal-04',
  
  // Disha's Cafe
  'a4ca245fc4f3f2d00c3e6fe7167ac5ce7498250d': 'disha-01',
  'd6a6d74438c9ad047ba7ebd926207b0ee3766496': 'disha-02',
  '806aa3c331d2b6ea74824f1170cbd4e794a70b23': 'disha-03',
  '95d24c8caeb2d9d92e741f2cdfc2ea4b3ee8132d': 'disha-04',
  
  // Ostello
  'da3600088e29efa5e0a559a2fde33115a99c5934': 'ostello-01',
  '882026b89eb2dce4219ecc95463360ed8be6ef97': 'ostello-02',
  '63942c3789d04b2339e8588eadd39d4c45175b89': 'ostello-03',
  '9c8c3ffcd6a358fbcd766d71eac2ce2d7266bc19': 'ostello-04',
  
  // Gallery images
  '289bb7c3be3b6204c2b264de09d7891f3757be05': 'gallery-01',
  'fed704d94a81b178188213a3110bff44f19ccae4': 'gallery-02',
  'd31c4c423b0e8749068fbf141c6ac9b021a2ca80': 'gallery-03',
  '1c0d381a1537f6a43156e8f3dbb49ff4d34d6b91': 'gallery-04',
  '46024272dfd89707e6e5723e7d88856d7e251732': 'gallery-05',
  '4c77783a58ff2d9d3857d8dd935fbe38d83da072': 'gallery-07',
  '5cd75a9e2d72eb813a71c8a916c45f4348c619e7': 'gallery-08',
  'e519d570512b6d10a0170f6d932b7dfd660e43e7': 'gallery-09',
  '3a0cad5b79d3b80611a4f2eb9c2c82aa6860f05c': 'gallery-10',
  '5260029bab1fa0960895cff96a679815b6d6ad4b': 'gallery-12',
  '626a08107f6ee37625f7951c805af447426a224c': 'gallery-13',
  '15467c656a2c1539beccb01eae4e27c5ecf5dbb0': 'gallery-14',
  'be02c8b98ec389061b06929b504c6004b40c518f': 'gallery-15',
  'e48dff4e83e4a7e9e7fe06cbf14fbbd13c531790': 'gallery-16',
  '01ef5a9ca9b4902a9f43c2e5d1b0ce8b02557780': 'gallery-17',
  '86118f805abe39e0ee2ccf7261b0f929ae7ad59d': 'gallery-20',
  '9a8bd22bb67dc0ae87ae561ccc41d7f24f29eed9': 'gallery-21',
  'a4ca245fc4f3f2d00c3e6fe7167ac5ce7498250d': 'gallery-24',
};

// To use: paste this in Figma console and call exportImages()
async function exportImages() {
  const page = figma.currentPage;
  const results = {};
  
  // Find all image nodes
  function findByHash(node, targetHash) {
    if ('fills' in node) {
      for (const fill of node.fills) {
        if (fill.type === 'IMAGE' && fill.imageHash === targetHash) {
          return node;
        }
      }
    }
    if ('children' in node) {
      for (const child of node.children) {
        const found = findByHash(child, targetHash);
        if (found) return found;
      }
    }
    return null;
  }
  
  for (const [hash, name] of Object.entries(IMAGE_MAP)) {
    const node = findByHash(page, hash);
    if (!node) continue;
    const bytes = await node.exportAsync({ format: 'PNG', constraint: { type: 'SCALE', value: 1 } });
    // Save bytes as file named `${name}.png`
    results[name] = bytes;
  }
  
  return results;
}
