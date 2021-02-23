function preload(){
    document.getElementById("msg").style.display="none";
}


var prebuilt = "";

var prebuilts_under_10000_for_office = ["Gandiva Economical C2D Desktop Computer", "(Renewed) Lenovo ThinkCentre M82 SFF Desktop", "Rolltop® Assembled Desktop CPU"];

var prebuilts_under_10000_for_office_links = ["https://www.amazon.in/Gandiva-Economical-Computer-Motherboard-Antivirus/dp/B08PZK2R38/", "https://www.amazon.in/Renewed-Lenovo-ThinkCentre-Desktop-320GB/dp/B08JQM1RFX/", "https://www.amazon.in/Assembled-CPU-Processor-Motherboard-PenDrive/dp/B082NM829T/"];

var prebuilts_under_10000_for_office_specs = ["This PC is equipped with an Intel Core2Duo processor with integrated graphics and a Zebronics G31 Motherboard, 4gb DDR2 ram, a 250 gb HDD and it has Windows 10 , MS Office, Free Antivirus installed in it, it also has onboard wifi", "This PC has an Intel core i5 processor with integrated graphics and 4gb DDR3 SDRAM, it has a 320gb hard drive with DOS installed, I'd suggest you install Windows, Dos does not have a Graphical Interface", "This PC has a Intel Core2Duo 3 ghz processor with integrated graphics and  a Zebronics G31 Motherboard, 2 gb of DDR2 SDRAM, 160 gb HDD with Windows 7 Ultimate installed on it "];
 var components_under_30000_for_gaming=["MSI A320M-A PRO MAX AMD AM4 Socket m-ATX Motherboard", "Crucial Ballistix Sport LT 3200 MHz DDR4 DRAM Desktop Gaming Memory Single 8GB CL16","Seagate FireCuda 1TB Solid State Hybrid Drive Performance SSHD", "Ant Esports VS500L Power Supply", "Ant Esports ICE-511MT Mid Tower Mesh Gaming Cabinet Computer Case", "Corsair TM30 Performance Thermal Paste (Silver)", "AMD Athlon 3000G with Radeon Vega 3 Graphics Desktop Processor"];
 var components_under_30000_for_gaming_links=["https://www.amazon.in/MSI-PRO-MAX-Motherboard-Processors/dp/B07W838R4F/", "https://www.amazon.in/Ballistix-Single-PC4-25600-288-Pin-Memory/dp/B07MNJSRYY/", "https://www.amazon.in/Seagate-St1000Lx015-Firecuda-Internal-Factor/dp/B01LXNUKKW/", "https://www.amazon.in/Ant-Esports-VS500L-Power-Supply/dp/B08D6HKTH3/",
 "https://www.amazon.in/Ant-Esports-ICE-511MT-Micro-ATX-Motherboard/dp/B0813C8PYB/","https://www.amazon.in/Corsair-Performance-Thermal-Paste-Silver/dp/B07KQ1T158/", "https://www.amazon.in/AMD-Graphics-Desktop-Processor-YD3000C6FHBOX/dp/B0815JGFQ8" ];
 var components_under_30000_for_gaming_specs=["The MSI A320M-A PRO MAX AMD AM4 Socket m-ATX Motherboard is the best for budget gaming and it features many top of the shelf motherboard features like Overclocking which is only present in expensive motherboards. And it also has support for upto 3200 megahertz of ram speed, also XMP which is the main Overclocking feature for ram. It also features Core Boost which can be used to push the turbo clock of your processor even further than the stock. Overall it is the best Motherboard for your budget gaming PC.", "The Ballistix lineup of Crucial has been the best go to for budget gamers in terms of speed and in terms of price. In this configuration we have 8 gigs of ram with 3200 megahertz speed which matches our motherboard, I'd suggest buying one more stick of the same ram to get dual channel performance with our AMD processor.", "The Seagate FireCuda has been the best so far budget gaming storage with its wapping 6GB/s speed and being the hybrid of a SSD and a HDD. SSD is faster than HDD, but SSDs has been very expensive over the last decade. So the solution is SSDs speed and HDDs size.", "The Ant sports VS500L is a good enough PSU with 500 watts to power our PC and it even has a little more headroom if you'd want to upgrade.", "The Ant Esports ICE-511MT Mid Tower Mesh gaming Case has lots of airflow because of the Mesh, and it even has a tempered glass sliding side panel. It also has 4 RGB fans preinstalled with it.","The Corsair TM30 thermal paste helps you push your pc to its limit, with a low-viscosity zinc oxide thermal material that’s easy to apply. TM30’s ultra-low thermal impedance ensures high-efficiency heat transfer between your hardware and cooler, lowering temperatures and allowing for higher clock speeds. Each syringe contains enough tm30 for multiple standard cpu applications, and once installed, tm30 lasts for years with no drying, cracking or thermal degradation. Whether you use liquid or air cooling, The Corsair TM30 thermal paste is ready to keep your pc cool under pressure and handle the hottest cpus and gpus with ease.", "And atlast we have our AMD processor, The Athlon 3000G!, The best ever budget processor with its speed matching a 500 dollar Intel core i7 processor and 2 processing cores. 2 is still not a bad amount for the low prize and the upto 3.5ghz speed you're getting. And what's even more suprising it's overclockable!. You can even raise the Ram speed limitation upto 3200mhz."];
 var components_under_100000_for_gaming=["ASRock B450 Steel Legend Socket ATX Motherboard","Cooler Master MasterBox K501L RGB V2 Mid Tower Gaming Case", "AMD 5000 Series Ryzen 5 5600X Desktop Processor", "Gigabyte Nvidia GeForce GTX 1050","Gigabyte AORUS NVMe Gen4 M.2 1TB","Corsair TM30 Performance Thermal Paste (Silver)", "Deepcool GAMMAXX L240T Blue LED CPU Liquid Cooler","G.SKILL Trident Z RGB 32GB (2 * 16GB) 3200 Mhz DDR4 Desktop Memory","TP-Link TX401 10 Gbps Wireless Gigabit PCI Express Network Adapter"];
 var components_under_100000_for_gaming_links=["https://www.amazon.in/ASRock-B450M-Generation-CrossFireX-Motherboard/dp/B07MV7LR1B/","https://www.amazon.in/Cooler-Master-MasterBox-Pre-Installed-Tempered/dp/B0846LL1HB/", "https://www.amazon.in/AMD-Ryzen-5600X-Processor-100-100000065BOX/dp/B08166SLDF/","https://www.amazon.in/Gigabyte-GV-N105TOC-4GD-Graphics-Cards-Black/dp/B01MEHGRMS/","https://www.amazon.in/Gigabyte-PCI-Express-Interface-Performance-GP-AG41TB/dp/B08FCY3BM2/","https://www.amazon.in/Corsair-Performance-Thermal-Paste-Silver/dp/B07KQ1T158/","https://www.amazon.in/DEEPCOOL-Gammaxx-L240T-Cooling-System/dp/B07TZ8DT8J/","https://www.amazon.in/G-Skill-Trident-Memory-Module-3200Mhz/dp/B07DMNZY56/","https://www.amazon.in/TP-Link-TX401-Wireless-Ethernet-compatible/dp/B08GFGG888/"];
 var components_under_100000_for_gaming_specs=["ASRock B450 Steel Legend Socket is best gaming motherboard for ryzen cpus. And if you are planning to get a amd gpu you would have Quad crossfire support which means you can run four amd gpu and have it all run as one! But currently amd gpus wont fit in our budgets so we had to keep it nvidia. This motherboard also has support for Overclocking, which is a must for gaming if you have a overclockable cpu and gpu which we have. This motherboard also has an M.2 NVMe slot, which we will be using. It also has a great IO, it has a USB C, it also can be a thunderbolt port and it also Display Port, HDMI and some others which I am not aware of", "For the case we have gone with a CoolerMaster K501L RGB V2 Mid Tower Gaming Case which has lots of airflow and RGB fans and a Tempered Glass Side Panel, but I know its common in new cases But just making sure you know about it. It also has 360mm radiator support but sadly we are going with a 240mm aio, spoiler alert!","For the Processor we are going with a Ryzen 5 5600x!, Its the best processor you could get under your budget with respect to the other product's price. It has a wapping 6 cores and turbo boost upto 4.6 gigahertz!, which we will be able to increase even further with our overclocking supported motherboard, then we have 12 thread and 35mb Cache, I know right it's a crazy processor!","As I said we have a Overclockable GPU , the one and only GTX 1050! This is the fastest overclockable Nvidia graphics card with a low prize. We have dual fans here, no problem of heat. It also has 4gb of GDDR5 which is the fastest other than GDDR6 which is quite expensive. It has DirectX12 which is the latest and looking at the IO we have DVI,HDMI and Display Port. The maximum resolution of this GPU is 7680x4320 which you will never be using if you are a normal guy, cause the monitor running at that resolution might cost about the half of the price of your Rig","For the M.2 NVMe ssd as I said we are going at full power, The Only Gigabyte AORUS NVMe Gen4 M.2 1TB PCI-Express 4.0 Interface High Performance Gaming SSD!, This is the fastest ever M.2 SSD , It even beats the Samsung 970 EVO!. This guy is running at PCI-E 4 and it has 5 gb reads and 4gb writes, this is the fastest you could get unless you are running a Server","The Corsair TM30 thermal paste helps you push your pc to its limit, with a low-viscosity zinc oxide thermal material that’s easy to apply. TM30’s ultra-low thermal impedance ensures high-efficiency heat transfer between your hardware and cooler, lowering temperatures and allowing for higher clock speeds. Each syringe contains enough tm30 for multiple standard cpu applications, and once installed, tm30 lasts for years with no drying, cracking or thermal degradation. Whether you use liquid or air cooling, The Corsair TM30 thermal paste is ready to keep your pc cool under pressure and handle the hottest cpus and gpus with ease.","For the AIO we are going with Deepcool GAMMAXX L240T Blue LED CPU Liquid Cooler. If you are going to do Overclocking this is the bang for the buck. Is has blue LED Lights on it if you are into the Stylish rig category. It deliver Great performance with low noise levels. And don't worry about leaking of whatever you put inside it is ANTI-LEAK .","Don't worry if your ram is not fast and does not have RGB, cause it does have both and for our config here we have taken 32gb 3200mhz which is as fast as it gets for the price. The ram is from G-SKILL so you will never be bottlenecked by your ram. For the better performance we have gone with 16x2 instead of one stick of 32gb ram because AMD processors yield better performance when ram is run in Dual Channel mode","Even if we have ethernet on our motherboard it is not 10 gigabit. We have a 10 gigabit network card, just think if you have one lakh rupees you should have atleat a gigabit connection in your home, so if you're upgrading to 10gig or if you already have your PC is ready for that. And don't worry consumer grade network speeds won't go over 10gig for the next 2 or 3 decades."];
 var components_under_1000000_for_gaming = ["ASUS ROG Strix X570-E Gaming", "AMD 5000 Series Ryzen 9 5950X Desktop Processor" ,"ASUS TUF Gaming NVIDIA GeForce RTX 3090 OC Edition Graphics Card","CORSAIR Crystal Series 680X RGB High Airflow Tempered Glass ATX Smart Case","AORUS GP-AG42TB Gen4 SSD 2TB", "Corsair CP-9020057-NA AX1500i Digital ATX 1500 Watt Power Supply","G.SKILL Trident Z Neo 32GB (2 * 16GB) DDR4 3600MHz CL18-22-22-42 1.35V Desktop Memory RAM", "Cooler Master MasterLiquid ML360P Silver Edition AIO Cooler","Asus 10Gbps Gigabit Ethernet PCI Express, Network Adapter","Liqid Element LQD4500 PCIe AIC Composable Storage SSD or Honeybadger","Sapphire Nitro+ AMD Radeon RX 6900 XT PCIe 4.0 Gaming Graphics Card with 16GB GDDR6"];
 var components_under_1000000_for_gaming_links = ["https://www.amazon.in/Motherboard-Gigabit-802-11ax-heatsinks-Lighting/dp/B07SW8DQVL/","https://www.amazon.in/AMD-Ryzen-5950X-Processor-100-100000059WOF/dp/B0815Y8J9N","https://www.amazon.in/ASUS-Graphics-DisplayPort-Military-Grade-Certification/dp/B08HN5B8FJ/","https://www.amazon.in/CORSAIR-Crystal-Airflow-Tempered-Glass/dp/B07MSQ63WS/","https://www.amazon.in/AORUS-GP-AG42TB-Gen4-SSD-2TB/dp/B08H64BPBH/","https://www.corsair.com/us/en/Categories/Products/Power-Supply-Units/axi-series-config/p/CP-9020057-NA","https://www.amazon.in/G-Skill-Trident-3600Mhz-Threadripper-F4-3600C18D-32GTZN/dp/B07WTSMHSY/","https://www.amazon.in/Cooler-Master-MasterLiquid-Controller-Threadripper/dp/B07Z4D6X96/","https://www.amazon.in/Gigabit-Ethernet-Express-Network-XG-C100F/dp/B07VLC7LT3/","https://www.liqid.com/products/composable-storage/element-lqd4500-pcie-aic-ssd","https://www.thevaluestore.in/asus-radeon-rx-6900xt-16gb-gddr6"];
var components_under_1000000_for_gaming_specs = ["The fastest Ryzen Motherboard the Asus ROG X570-E. He's the fastest and the strongest. The x570-E has 4 ram slots, 2 m.2 NVMe slots, 3 16x PCIe slots, 2 mini PCIe slots and looking at the IO we have 1 mic in, 1 rear, 1S/PDIF,1 c/sub, 1 line in and 1 line out(Don't feel bad if you don't understand what most of them are I myself don't know what most of them are, i'm just reading it off the amazon product specs and why do they need this much audio jack ports man). And it has 7x usb 3.2 gen2 type-a, 1 usb type-c gen2.","The fastest gaming processor in the market. The one and only Ryzen 9 5950X. He's the fastest processor for gaming , now you might say why not threadripper or Intel's Core i9 10900k. The reason is that Threadripper has  64 cores ansd all of them run at 3.9 ghz speed, it's not a bad thing but the only advantage of threadripper as the fastest processor is it's number of cores but it's only useful for people with worksation as their applications take advantage of more than 1 core at a time but on the other hand games only take advantage 3 or 4 cores at a time and they run more fast according to the clock speeds. The reason for not going Intel's 10900k is because of the one and only reason which one's the fastest and if you look at the specs the 10900k has only 10 cores, 20 threads, 20mb cache, on the other the 5950x has 16 cores , 32 threads and 72 mb cache. Intel's already fallen don't kick them again AMD!. And if you don't believe me watch this https://www.youtube.com/watch?v=iZBIeM2zE-I (and yes it's Linus who else can explain it to you other than him!)","And for the GPU the graphics power you will never fully yield with any PC, enough cuda cores and graphics memory to choke a horse(Again nobody wants to do that), the GPU King , one and only RTX 3090. And it's an Overclockable edition!. Just saying he's only a king we got a god saved for the last. Let's get to the specs, he is rocking 24gb of GDDR6X. You can run 8K with it (If you get a monitor able to handle 8K on the shelfs of some tech shops, don't ever go looking for a 8K monitor on the internet it's all out and pricey). This 3090 is from asus so you can use GPU Tweak II. Ok ok Nvidia it has DLSS. But it's cheating that is not raw gpu horsepower!. It's a ray tracing enabled GPU so ✌👍👌. I suggest buying some support stand for it cause it weighs  1kg if you don't want your motherboard to break in half!","For the case we have a CORSAIR one, nothing intersting I'm just gonna copy it off amazon. Just kidding this is the best case in the market, I've never got too excited for a case. It's a white case so you're going minimalistic! You got lots of airflow to freeze a polar bear(Don't search for the idiom on the internet it's made by me). It's got space for a 360mm AIO and we're gonna utilize it(spoiler alert).It has 3 rgb fans and one normal fan preinstalled, no need to buy more fans, all the space is utilized. It says's it's got 3 tempered glass panels(I wonder where's three of them gonna go, it's an expensive case and it's corsair they do unexpected things)","For the ssd we have an AORUS GP-AG42TB Gen4. It's a 2tb ssd. It has a 5gb read speed and 4.4gb write speed. Now you may ask why not the 970 evo plus and the reason is that the 970 evo plus is using PCIe 3.0, and our motherboard is PCIe 4.0. 970 evo plus is compatible with our motherboard but the SSD might become a bottleneck for the cpu. And mainly looking at the performance the 970 evo plus only has 3.5gb read speed and 3.3 write speed, which is lower than The AORUS GP-AG42TB","To power a god and a king we have a 1500 watt powersupply from one and only Corsair (they do unexpected things). Now you might ask why 1500 watts, the answer is that the rtx3090 and The God (I will only unveil the god at the last). Both of them can consume upto 900 watts and more on their own when in full-workload. And the remaining 300 watts or so may not be enough for the Threadripper and also if you'd overclock the gpus and cpu , It might be Game over for your pc. So going with the Corsair CP-9020057-NA AX1500i Digital ATX 1500 Watt Power Supply would be the best option.","For the ram  we are going with TridentZ from G SKILL (16X2) 32 gig kit. I would suggest buying 4 of them cause it's threadripper and you wouldn't need a bottleneck from ram. If you'd buy 4 of the memory I have listed you can fit all the ram slots , also you'd get 128 gigs of memory (Threadripper can performe at the best when choking it with ram). It' RGB ram. RGB adds more FPS (That's what Linus said!). And also it is Threadripper optimized memory.","We have no compromises on the Cooling, we have a 360mm Liquid cooled AIO. For threadripper we cannot have compromises on cooling. Now you might asking why not water cooling, the answer is water cooling is complicated (unless you have some PC boutiques do it for you) and it's not cheap. So if you're a fan of water cooling here's an option https://www.amazon.in/Corsair-Cooling-Reservoir-Radiator-Commander/dp/B08C7NTWND/, it's a water cooling kit from corsair and reviews say it's good.","And now we have internet, so we have gone with 10gbps. If you'd be buying the fastest  aircooled pc in the world (I am reffering to this build itself) you should be having a fiber connection. Even if you don't have one you have 1 gbps speed ethernet port in your motherboard.  ","And because of your budget and remaining 2 PCIe slots there's another thing . Have you ever heard of the Honeybadger, if you're a LTT fan  you might have heard about the HoneyBadger. If you haven't heard about it, it's an AIC (short for add in card) in which you can put upto 8 m.2 nvme ssd. The full storage limit is 32tb all ssd's together. I suggest the main ssd I had suggested for this.","Atlast the God. The Red God 6900xt. The 6900xt is the fastest GPU you would get. It's out of stock everywhere but I've got you covered. Featuring  AMD's new RDNA platform and support upto 8k video streaming. It's the best, even Linus said it (https://www.youtube.com/watch?v=0xUioPsLRKA). It's got 16 gb of graphics memory, lesser than the 3090. Now as always you might say the numbers don't add up and also nvidia is supposed to be faster ,but have you tried seeing it in action. I'm out of words there so much to say but I'm stopping here."]
workstation_build_under_1200000 = ["AMD Threadripper 3990X","EVGA GeForce RTX 3090 XC3 ULTRA HYBRID GAMING","MSI TRX40 PRO 10G Motherboard","ASUS ROG Ryujin 360 RGB AIO Liquid CPU Cooler 360mm"]
function useset() {
    localStorage.setItem("use", document.getElementById("PC_use").value);

    console.log(localStorage.getItem("use"));
}
function budgetset() {
    localStorage.setItem("budget", document.getElementById("budget").value);
    if (localStorage.getItem("budget") < "10000") {

    }
    else {
        console.log(budget);
        window.location = "builder_2.html";
        budget=budget;
    }
}
function build_diy() {
    localStorage.setItem("build_yourself", 1);
    console.log(localStorage.getItem("build_yourself"), "DIY it");
    window.location = "DIY_part.html";
}
function prebuilt_op() {
    localStorage.setItem("prebuilt", 1);
    console.log(localStorage.getItem("prebuilt"), "prebuilt");
    window.location = "Prebuilt.html";
}
function showresults(){

    if (localStorage.getItem("budget") == 10000 && localStorage.getItem("prebuilt") == 1 && localStorage.getItem("use") == "Education/Coding/Office"){
    document.getElementById("show_1").innerHTML="<h3>"+prebuilts_under_10000_for_office[0]+"</h3><br><br><h3>"+prebuilts_under_10000_for_office_specs[0]+"</h3><button onclick='redirect_page_1()'>Link For Product</button>";
    document.getElementById("show_2").innerHTML="<h3>"+prebuilts_under_10000_for_office[1]+"</h3><br><br><h3>"+prebuilts_under_10000_for_office_specs[1]+"</h3><button onclick='redirect_page_2()'>Link For Product</button>";
    document.getElementById("show_3").innerHTML="<h3>"+prebuilts_under_10000_for_office[2]+"</h3><br><br><h3>"+prebuilts_under_10000_for_office_specs[2]+"</h3><button onclick='redirect_page_3()'>Link For Product</button>";
    }
     
}
function redirect_page_1(){
    window.location="https://www.amazon.in/Gandiva-Economical-Computer-Motherboard-Antivirus/dp/B08PZK2R38/";
}
function redirect_page_2(){
    window.location="https://www.amazon.in/Renewed-Lenovo-ThinkCentre-Desktop-320GB/dp/B08JQM1RFX/";
}
function redirect_page_3(){
    window.location="https://www.amazon.in/Assembled-CPU-Processor-Motherboard-PenDrive/dp/B082NM829T/";
}
function redirect_page_part(){
    window.location="https://www.amazon.in/MSI-PRO-MAX-Motherboard-Processors/dp/B07W838R4F/";
}
function redirect_page_part1(){
    window.location="https://www.amazon.in/Ballistix-Single-PC4-25600-288-Pin-Memory/dp/B07MNJSRYY/";
}
function redirect_page_part2(){
    window.location="https://www.amazon.in/Seagate-St1000Lx015-Firecuda-Internal-Factor/dp/B01LXNUKKW/";
}
function redirect_page_part3(){
    window.location="https://www.amazon.in/Ant-Esports-VS500L-Power-Supply/dp/B08D6HKTH3/";
}
function redirect_page_part4(){
    window.location="https://www.amazon.in/Ant-Esports-ICE-511MT-Micro-ATX-Motherboard/dp/B0813C8PYB/";
}
function redirect_page_part5(){
    window.location="https://www.amazon.in/Corsair-Performance-Thermal-Paste-Silver/dp/B07KQ1T158/";
}
function redirect_page_part6(){
    window.location="https://www.amazon.in/AMD-Graphics-Desktop-Processor-YD3000C6FHBOX/dp/B0815JGFQ8";
}
function redirect_page_part10(){
    window.location="https://www.amazon.in/ASRock-B450M-Generation-CrossFireX-Motherboard/dp/B07MV7LR1B/";
}
function redirect_page_part11(){
    window.location="https://www.amazon.in/Cooler-Master-MasterBox-Pre-Installed-Tempered/dp/B0846LL1HB/";
}
function redirect_page_part12(){
    window.location="https://www.amazon.in/AMD-Ryzen-5600X-Processor-100-100000065BOX/dp/B08166SLDF/";
}
function redirect_page_part13(){
    window.location="https://www.amazon.in/Gigabyte-GV-N105TOC-4GD-Graphics-Cards-Black/dp/B01MEHGRMS/";
}
function redirect_page_part14(){
    window.location="https://www.amazon.in/Gigabyte-PCI-Express-Interface-Performance-GP-AG41TB/dp/B08FCY3BM2/";
}
function redirect_page_part15(){
    window.location="https://www.amazon.in/Corsair-Performance-Thermal-Paste-Silver/dp/B07KQ1T158/";
}
function redirect_page_part16(){
    window.location="https://www.amazon.in/DEEPCOOL-Gammaxx-L240T-Cooling-System/dp/B07TZ8DT8J/";
}
function redirect_page_part17(){
    window.location="https://www.amazon.in/G-Skill-Trident-Memory-Module-3200Mhz/dp/B07DMNZY56/";
}
function redirect_page_part18(){
    window.location="https://www.amazon.in/TP-Link-TX401-Wireless-Ethernet-compatible/dp/B08GFGG888/";
}
function redirect_page_part19(){
    window.location="https://www.amazon.in/Gigabyte-X399-Designare-EX-Motherboard/dp/B07662S766/";
}
function redirect_page_part21(){
    window.location="https://www.amazon.in/AMD-Ryzen-Threadripper-3990X-100-100000163WOF/dp/B0815SBQ9W";
}
function redirect_page_part22(){
    window.location="https://www.amazon.in/ASUS-Graphics-DisplayPort-Military-Grade-Certification/dp/B08HN5B8FJ/";
}
function redirect_page_part23(){
    window.location="https://www.amazon.in/CORSAIR-Crystal-Airflow-Tempered-Glass/dp/B07MSQ63WS/";
}
function redirect_page_part24(){
    window.location="https://www.amazon.in/AORUS-GP-AG42TB-Gen4-SSD-2TB/dp/B08H64BPBH/";
}
function redirect_page_part25(){
    window.location="https://www.corsair.com/us/en/Categories/Products/Power-Supply-Units/axi-series-config/p/CP-9020057-NA";
}
function redirect_page_part26(){
    window.location="https://www.amazon.in/G-Skill-Trident-3600Mhz-Threadripper-F4-3600C18D-32GTZN/dp/B07WTSMHSY/";
}
function redirect_page_part27(){
    window.location="https://www.amazon.in/Cooler-Master-MasterLiquid-Controller-Threadripper/dp/B07Z4D6X96/";
}
function redirect_page_part28(){
    window.location="https://www.amazon.in/Gigabit-Ethernet-Express-Network-XG-C100F/dp/B07VLC7LT3/";
}
function redirect_page_part29(){
    window.location="https://www.liqid.com/products/composable-storage/element-lqd4500-pcie-aic-ssd";
}
function redirect_page_part30(){
    window.location="https://www.thevaluestore.in/asus-radeon-rx-6900xt-16gb-gddr6";
}



function showcomponents(){

    if(localStorage.getItem("budget") == 30000 && localStorage.getItem("build_yourself") == 1 &&  localStorage.getItem("use") == "Gaming"){
    
    document.getElementById("show_part_1").innerHTML="<h3>"+components_under_30000_for_gaming[0]+"</h3><br><br><h3>"+components_under_30000_for_gaming_specs[0]+"</h3><button onclick='redirect_page_part()'>Link For Product</button>";
    document.getElementById("show_part_2").innerHTML="<h3>"+components_under_30000_for_gaming[1]+"</h3><br><br><h3>"+components_under_30000_for_gaming_specs[1]+"</h3><button onclick='redirect_page_part1()'>Link For Product</button>";
    document.getElementById("show_part_3").innerHTML="<h3>"+components_under_30000_for_gaming[2]+"</h3><br><br><h3>"+components_under_30000_for_gaming_specs[2]+"</h3><button onclick='redirect_page_part2()'>Link For Product</button>";
    document.getElementById("show_part_4").innerHTML="<h3>"+components_under_30000_for_gaming[3]+"</h3><br><br><h3>"+components_under_30000_for_gaming_specs[3]+"</h3><button onclick='redirect_page_part3()'>Link For Product</button>";
    document.getElementById("show_part_5").innerHTML="<h3>"+components_under_30000_for_gaming[4]+"</h3><br><br><h3>"+components_under_30000_for_gaming_specs[4]+"</h3><button onclick='redirect_page_part4()'>Link For Product</button>";
    document.getElementById("show_part_6").innerHTML="<h3>"+components_under_30000_for_gaming[5]+"</h3><br><br><h3>"+components_under_30000_for_gaming_specs[5]+"</h3><button onclick='redirect_page_part5()'>Link For Product</button>";
    document.getElementById("show_part_7").innerHTML="<h3>"+components_under_30000_for_gaming[6]+"</h3><br><br><h3>"+components_under_30000_for_gaming_specs[6]+"</h3><button onclick='redirect_page_part6()'>Link For Product</button>";}
     else  if(localStorage.getItem("budget") == 100000 && localStorage.getItem("build_yourself") == 1 &&  localStorage.getItem("use") == "Gaming"){
        
        document.getElementById("show_part_1").innerHTML="<h3>"+components_under_100000_for_gaming[0]+"</h3><br><br><h3>"+components_under_100000_for_gaming_specs[0]+"</h3><button onclick='redirect_page_part10()'>Link For Product</button>";
        document.getElementById("show_part_2").innerHTML="<h3>"+components_under_100000_for_gaming[1]+"</h3><br><br><h3>"+components_under_100000_for_gaming_specs[1]+"</h3><button onclick='redirect_page_part11()'>Link For Product</button>";
        document.getElementById("show_part_3").innerHTML="<h3>"+components_under_100000_for_gaming[2]+"</h3><br><br><h3>"+components_under_100000_for_gaming_specs[2]+"</h3><button onclick='redirect_page_part12()'>Link For Product</button>";
        document.getElementById("show_part_4").innerHTML="<h3>"+components_under_100000_for_gaming[3]+"</h3><br><br><h3>"+components_under_100000_for_gaming_specs[3]+"</h3><button onclick='redirect_page_part13()'>Link For Product</button>";
        document.getElementById("show_part_5").innerHTML="<h3>"+components_under_100000_for_gaming[4]+"</h3><br><br><h3>"+components_under_100000_for_gaming_specs[4]+"</h3><button onclick='redirect_page_part14()'>Link For Product</button>";
        document.getElementById("show_part_6").innerHTML="<h3>"+components_under_100000_for_gaming[5]+"</h3><br><br><h3>"+components_under_100000_for_gaming_specs[5]+"</h3><button onclick='redirect_page_part15()'>Link For Product</button>";
        document.getElementById("show_part_7").innerHTML="<h3>"+components_under_100000_for_gaming[6]+"</h3><br><br><h3>"+components_under_100000_for_gaming_specs[6]+"</h3><button onclick='redirect_page_part16()'>Link For Product</button>";
        document.getElementById("show_part_8").innerHTML="<h3>"+components_under_100000_for_gaming[7]+"</h3><br><br><h3>"+components_under_100000_for_gaming_specs[7]+"</h3><button onclick='redirect_page_part17()'>Link For Product</button>";
        document.getElementById("show_part_9").innerHTML="<h3>"+components_under_100000_for_gaming[8]+"</h3><br><br><h3>"+components_under_100000_for_gaming_specs[8]+"</h3><button onclick='redirect_page_part18()'>Link For Product</button>"}
        if (localStorage.getItem("budget") == 1000000 && localStorage.getItem("build_yourself") == 1 &&  localStorage.getItem("use") == "Gaming"){
            
            document.getElementById("show_part_1").innerHTML="<h3>"+components_under_1000000_for_gaming[0]+"</h3><br><br><h3>"+components_under_1000000_for_gaming_specs[0]+"</h3><button onclick='redirect_page_part19()'>Link For Product</button>";
            document.getElementById("show_part_2").innerHTML="<h3>"+components_under_1000000_for_gaming[1]+"</h3><br><br><h3>"+components_under_1000000_for_gaming_specs[1]+"</h3><button onclick='redirect_page_part21()'>Link For Product</button>";
            document.getElementById("show_part_3").innerHTML="<h3>"+components_under_1000000_for_gaming[2]+"</h3><br><br><h3>"+components_under_1000000_for_gaming_specs[2]+"</h3><button onclick='redirect_page_part22()'>Link For Product</button>";
            document.getElementById("show_part_4").innerHTML="<h3>"+components_under_1000000_for_gaming[3]+"</h3><br><br><h3>"+components_under_1000000_for_gaming_specs[3]+"</h3><button onclick='redirect_page_part23()'>Link For Product</button>";
            document.getElementById("show_part_5").innerHTML="<h3>"+components_under_1000000_for_gaming[4]+"</h3><br><br><h3>"+components_under_1000000_for_gaming_specs[4]+"</h3><button onclick='redirect_page_part24()'>Link For Product</button>";
            document.getElementById("show_part_6").innerHTML="<h3>"+components_under_1000000_for_gaming[5]+"</h3><br><br><h3>"+components_under_1000000_for_gaming_specs[5]+"</h3><button onclick='redirect_page_part25()'>Link For Product</button>";
            document.getElementById("show_part_7").innerHTML="<h3>"+components_under_1000000_for_gaming[6]+"</h3><br><br><h3>"+components_under_1000000_for_gaming_specs[6]+"</h3><button onclick='redirect_page_part26()'>Link For Product</button>";
            document.getElementById("show_part_8").innerHTML="<h3>"+components_under_1000000_for_gaming[7]+"</h3><br><br><h3>"+components_under_1000000_for_gaming_specs[7]+"</h3><button onclick='redirect_page_part27()'>Link For Product</button>";
            document.getElementById("show_part_9").innerHTML="<h3>"+components_under_1000000_for_gaming[8]+"</h3><br><br><h3>"+components_under_1000000_for_gaming_specs[8]+"</h3><button onclick='redirect_page_part28()'>Link For Product</button>";
            document.getElementById("show_part_10").innerHTML="<h3>"+components_under_1000000_for_gaming[9]+"</h3><br><br><h3>"+components_under_1000000_for_gaming_specs[9]+"</h3><button onclick='redirect_page_part29()'>Link For Product</button>";
            document.getElementById("show_part_11").innerHTML="<h3>"+components_under_1000000_for_gaming[10]+"</h3><br><br><h3>"+components_under_1000000_for_gaming_specs[10]+"</h3><button onclick='redirect_page_part30()'>Link For Product</button>";
        }
        }

