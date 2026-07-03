# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Bing.spec.ts >> Bing
- Location: tests\Bing.spec.ts:3:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//h2[text() = \'Playwright\']')
Expected: "Playwright"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('//h2[text() = \'Playwright\']')

```

```yaml
- main:
  - heading "Microsoft Logo Image" [level=1]:
    - img "Microsoft Logo Image"
  - navigation:
    - menubar:
      - menuitem "Copilot":
        - link "Copilot":
          - /url: /chat?FORM=hpcodx&intent=bing
      - menuitem "Images":
        - link "Images":
          - /url: /images?FORM=Z9LH
      - menuitem "Videos":
        - link "Videos":
          - /url: /videos?FORM=Z9LH1
      - menuitem "Shopping":
        - link "Shopping":
          - /url: /shop?FORM=Z9LHS4
      - menuitem "Maps":
        - link "Maps":
          - /url: /maps?FORM=Z9LH2
      - menuitem "News":
        - link "News":
          - /url: /news/search?q=Top+stories&nvaug=%5bNewsVertical+Category%3d%22rt_MaxClass%22%5d&FORM=Z9LH3
      - menuitem ". . . More":
        - text: . . .
        - button "More"
  - complementary "Account Rewards and Preferences":
    - link "Sign in Sign in":
      - /url: javascript:void(0)
      - text: Sign in
    - button "Microsoft Rewards":
      - text: Rewards
      - img
    - button "Mobile":
      - text: Mobile
      - img
    - button "Settings and quick links"
  - search:
    - combobox "Enter your search here - Search suggestions will show as you type":
      - text: PlayWright PlayWright
      - status
    - button "Clear"
    - link "Open Copilot":
      - /url: /chat?FORM=hpcodx&intent=bing
    - group "Languages:":
      - text: "Languages:"
      - link "Hindi":
        - /url: /?setlang=hi&cc=in&cc=IN
        - text: हिंदी
      - link "Bangla":
        - /url: /?setlang=bn&cc=in&cc=IN
        - text: বাংলা
      - link "Urdu":
        - /url: /?setlang=ur&cc=in&cc=IN
        - text: اردو
      - link "Punjabi (Gurmukhi)":
        - /url: /?setlang=pa-guru&cc=in&cc=IN
        - text: ਪੰਜਾਬੀ
      - link "Marathi":
        - /url: /?setlang=mr&cc=in&cc=IN
        - text: मराठी
      - link "Telugu":
        - /url: /?setlang=te&cc=in&cc=IN
        - text: తెలుగు
      - link "Tamil":
        - /url: /?setlang=ta&cc=in&cc=IN
        - text: தமிழ்
      - link "Kannada":
        - /url: /?setlang=kn&cc=in&cc=IN
        - text: ಕನ್ನಡ
      - link "Gujarati":
        - /url: /?setlang=gu&cc=in&cc=IN
        - text: ગુજરાતી
      - link "Malayalam":
        - /url: /?setlang=ml&cc=in&cc=IN
        - text: മലയാളം
      - link "Odia":
        - /url: /?setlang=or&cc=in&cc=IN
        - text: ଓଡ଼ିଆ
  - link "Image creator":
    - /url: /images/create/ai-image-generator?bicsource=hp&FORM=bicbhp
  - link "Video creator":
    - /url: /images/create/ai-video-generator?bicsource=hp&FORM=bvcbhp
  - link "Text creator":
    - /url: /search?q=bing ai writing&FORM=btcbhp
- dialog "Bing homepage quiz Which ancient deity was central to the Temple of Esna?":
  - group "Bing homepage quiz Which ancient deity was central to the Temple of Esna?":
    - text: Bing homepage quiz Which ancient deity was central to the Temple of Esna?
    - list:
      - listitem:
        - 'link "Answer: A, Horus, 1 of 3"':
          - /url: /search?q=Khnum&filters=mgzv3configlist%3A%22BingQA_Quiz_layout%22+IsConversation%3A%22True%22+btrequestsource%3A%22homepage%22+WQOskey%3A%22HPQuiz_20260702_TempleEsna%22+WQId%3A%221%22+WQQI%3A%220%22+WQCI%3A%220%22+UserChoices%3A%220%22+ShowTimesTaskPaneTrigger%3A%22false%22+WQSCORE%3A%220%22&FORM=HPQUIZ
          - text: A Horus
      - listitem:
        - 'link "Answer: B, Khnum, 2 of 3"':
          - /url: /search?q=Khnum&filters=mgzv3configlist%3A%22BingQA_Quiz_layout%22+IsConversation%3A%22True%22+btrequestsource%3A%22homepage%22+WQOskey%3A%22HPQuiz_20260702_TempleEsna%22+WQId%3A%221%22+WQQI%3A%220%22+WQCI%3A%221%22+UserChoices%3A%221%22+ShowTimesTaskPaneTrigger%3A%22false%22+WQSCORE%3A%221%22&FORM=HPQUIZ
          - text: B Khnum
      - listitem:
        - 'link "Answer: C, Osiris, 3 of 3"':
          - /url: /search?q=Khnum&filters=mgzv3configlist%3A%22BingQA_Quiz_layout%22+IsConversation%3A%22True%22+btrequestsource%3A%22homepage%22+WQOskey%3A%22HPQuiz_20260702_TempleEsna%22+WQId%3A%221%22+WQQI%3A%220%22+WQCI%3A%222%22+UserChoices%3A%222%22+ShowTimesTaskPaneTrigger%3A%22false%22+WQSCORE%3A%220%22&FORM=HPQUIZ
          - text: C Osiris
- link "Get the Bing Wallpaper app":
  - /url: https://go.microsoft.com/fwlink/?linkid=2127455
- 'heading "Image of the day: Ceiling of the Temple of Esna, Egypt" [level=3]':
  - 'link "Image of the day: Ceiling of the Temple of Esna, Egypt"':
    - /url: /search?q=Temple+of+Esna+Egypt&form=hpcapt&filters=HpDate:"20260701_1830"+mgzv3configlist:"BingQA_Encyclopedia_Layout"
    - text: Ceiling of the Temple of Esna, Egypt
- text: © Nick Brundle Photography/Getty Images
- list:
  - listitem:
    - button "Download this image. Use of this image is restricted to wallpaper only."
- link "Inside Esna's sacred universe":
  - /url: /search?q=Temple+of+Esna+Egypt&form=hpcapt&filters=HpDate:"20260701_1830"+mgzv3configlist:"BingQA_Encyclopedia_Layout"
  - heading "Inside Esna's sacred universe" [level=2]
- status
- button "Previous image"
- button "Next image" [disabled]
- button "Feedback":
  - img
  - text: Feedback
- region "Trending on Bing":
  - status
  - button "Toggle feed area position" [expanded]
  - button "Previous news" [disabled]
  - button "More news"
  - list:
    - listitem:
      - list:
        - listitem:
          - link "CM Vijay's government in danger? What we know about the TVK-DMK 'horse-trading' row © Hindustan Times":
            - /url: /search?q=CM+Vijay%27s+government+in+danger%3f+What+we+know+about+the+TVK-DMK+%27horse-trading%27+row&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_35E6133694EC571A6E180432BB25FFFA%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%220%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - heading "CM Vijay's government in danger? What we know about the TVK-DMK 'horse-trading' row" [level=2]
            - img "© Hindustan Times"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/cm-vijay-s-government-in-danger-what-we-know-about-the-tvk-dmk-horse-trading-row/ar-AA272iHy?ocid=TobArticle
              - img
        - listitem:
          - link "Watch what happens after a 76-year-old woman withdraws $20,000 for scammers © Scammer Payback":
            - /url: /search?q=Watch+what+happens+after+a+76-year-old+woman+withdraws+%2420%2c000+for+scammers&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_6D16FC897E3A4873B6339F71DD43C068%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%221%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - heading "Watch what happens after a 76-year-old woman withdraws $20,000 for scammers" [level=2]
            - img "© Scammer Payback"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/other/watch-what-happens-after-a-76-year-old-woman-withdraws-20-000-for-scammers/vi-AA25aPsS?ocid=TobArticle
              - img
        - listitem:
          - 'link "‘Thank you, Didi’: Blinkit rider gets Rs 500 tip on Rs 15 order, says it equals two days’ earnings © News18"':
            - /url: /search?q=%e2%80%98Thank+you%2c+Didi%e2%80%99%3a+Blinkit+rider+gets+Rs+500+tip+on+Rs+15+order%2c+says+it+equals+two+days%e2%80%99+earnings&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_00DE826C38CCE5610ACE0D107D25023F%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%222%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - 'heading "‘Thank you, Didi’: Blinkit rider gets Rs 500 tip on Rs 15 order, says it equals two days’ earnings" [level=2]'
            - img "© News18"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/thank-you-didi-blinkit-rider-gets-rs-500-tip-on-rs-15-order-says-it-equals-two-days-earnings/ar-AA272TCp?ocid=TobArticle
              - img
        - listitem:
          - 'link "Watch: Rahul Dravid''s son Samit lights up T20 league with 360-degree batting © NDTV Sports"':
            - /url: /search?q=Watch%3a+Rahul+Dravid%27s+son+Samit+lights+up+T20+league+with+360-degree+batting&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_203D246AAC1A8F915188B9819FF19E1A%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%223%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - 'heading "Watch: Rahul Dravid''s son Samit lights up T20 league with 360-degree batting" [level=2]'
            - img "© NDTV Sports"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/sports/cricket/watch-rahul-dravid-s-son-samit-lights-up-t20-league-with-360-degree-batting/ar-AA272KwA?ocid=TobArticle
              - img
        - listitem:
          - link "Boney Kapoor reveals daughter Anshula's wedding with Rohan Thakkar will merge two cultures under one roof © The Statesman":
            - /url: /search?q=Boney+Kapoor+reveals+daughter+Anshula%27s+wedding+with+Rohan+Thakkar+will+merge+two+cultures+under+one+roof&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_03F00E3AA58C6AD8C6F7A9C3E3771E70%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%224%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - heading "Boney Kapoor reveals daughter Anshula's wedding with Rohan Thakkar will merge two cultures under one roof" [level=2]
            - img "© The Statesman"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/entertainment/bollywood/boney-kapoor-reveals-daughter-anshula-s-wedding-with-rohan-thakkar-will-merge-two-cultures-under-one-roof/ar-AA272hZ6?ocid=TobArticle
              - img
        - listitem:
          - 'link "Aadhav Arjuna issues challenge to Red Giant Movies: ''We will not allow them to release films'' © Cinemaexpress"':
            - /url: /search?q=Aadhav+Arjuna+issues+challenge+to+Red+Giant+Movies%3a+%27We+will+not+allow+them+to+release+films%27&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_71D30CE2263E79DAA94107DE766D015F%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%225%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - 'heading "Aadhav Arjuna issues challenge to Red Giant Movies: ''We will not allow them to release films''" [level=2]'
            - img "© Cinemaexpress"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/lifestyle/relationships/aadhav-arjuna-issues-challenge-to-red-giant-movies-we-will-not-allow-them-to-release-films/ar-AA273tXI?ocid=TobArticle
              - img
        - listitem:
          - 'link "Pune murder case: Siya Goyal''s old nightclub video with beer in hand, heated phone call goes viral © NDTV Profit"':
            - /url: /search?q=Pune+murder+case%3a+Siya+Goyal%27s+old+nightclub+video+with+beer+in+hand%2c+heated+phone+call+goes+viral&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_40D5916D78E047CF35A6DC180DB88676%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%226%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - 'heading "Pune murder case: Siya Goyal''s old nightclub video with beer in hand, heated phone call goes viral" [level=2]'
            - img "© NDTV Profit"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/pune-murder-case-siya-goyal-s-old-nightclub-video-with-beer-in-hand-heated-phone-call-goes-viral/ar-AA273pSn?ocid=TobArticle
              - img
        - listitem:
          - 'link "''Kya kar raha hai yaar?'': Abhishek Sharma, Ishan Kishan''s stump mic chat goes viral after run out dismissal © Sports Tak"':
            - /url: /search?q=%27Kya+kar+raha+hai+yaar%3f%27%3a+Abhishek+Sharma%2c+Ishan+Kishan%27s+stump+mic+chat+goes+viral+after+run+out+dismissal&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_C7B42A0E29732551B26B228642428164%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%227%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - 'heading "''Kya kar raha hai yaar?'': Abhishek Sharma, Ishan Kishan''s stump mic chat goes viral after run out dismissal" [level=2]'
            - img "© Sports Tak"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/sports/cricket/kya-kar-raha-hai-yaar-abhishek-sharma-ishan-kishan-s-stump-mic-chat-goes-viral-after-run-out-dismissal/ar-AA272Etz?ocid=TobArticle
              - img
        - listitem:
          - 'link "Bengaluru daycare abuse: Whistleblower fired after reporting crime © Mani Raj"':
            - /url: /search?q=Bengaluru+daycare+abuse%3a+Whistleblower+fired+after+reporting+crime&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_D7B21A262B62DCA40706E52900CD711E%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%228%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - 'heading "Bengaluru daycare abuse: Whistleblower fired after reporting crime" [level=2]'
            - img "© Mani Raj"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/bengaluru-daycare-abuse-whistleblower-fired-after-reporting-crime/ar-AA273faD?ocid=TobArticle
              - img
        - listitem:
          - 'link "New EPFO rules are here: 7 questions every salaried employee is asking © News18"':
            - /url: /search?q=New+EPFO+rules+are+here%3a+7+questions+every+salaried+employee+is+asking&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_F6644EF6E006D4C9DFF92BE2478BAC08%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%229%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - 'heading "New EPFO rules are here: 7 questions every salaried employee is asking" [level=2]'
            - img "© News18"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/new-epfo-rules-are-here-7-questions-every-salaried-employee-is-asking/ar-AA273n7g?ocid=TobArticle
              - img
        - listitem:
          - link "Mystery behind Anushka Sharma's viral Lord's dress finally solved, Sophie Dhawan reveals © News18":
            - /url: /search?q=Mystery+behind+Anushka+Sharma%27s+viral+Lord%27s+dress+finally+solved%2c+Sophie+Dhawan+reveals&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_A12438430CBB2853519C92E243CE1471%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2210%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - heading "Mystery behind Anushka Sharma's viral Lord's dress finally solved, Sophie Dhawan reveals" [level=2]
            - img "© News18"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/sports/cricket/mystery-behind-anushka-sharma-s-viral-lord-s-dress-finally-solved-sophie-dhawan-reveals/ar-AA273Muq?ocid=TobArticle
              - img
        - listitem:
          - 'link "Bilateral on paper, international in practice: Pakistan''s Shimla U-turn on Kashmir © The Sunday Guardian"':
            - /url: /search?q=Bilateral+on+paper%2c+international+in+practice%3a+Pakistan%27s+Shimla+U-turn+on+Kashmir&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_7A9698CB8D52C9341742825DAAD7B2B3%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2211%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - 'heading "Bilateral on paper, international in practice: Pakistan''s Shimla U-turn on Kashmir" [level=2]'
            - img "© The Sunday Guardian"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/bilateral-on-paper-international-in-practice-pakistan-s-shimla-u-turn-on-kashmir/ar-AA272nbk?ocid=TobArticle
              - img
        - listitem:
          - 'link "''India only country to match China''s scale in...'': US senator''s remarks over trust and innovation © Hindustan Times"':
            - /url: /search?q=%27India+only+country+to+match+China%27s+scale+in...%27%3a+US+senator%27s+remarks+over+trust+and+innovation&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_3E93CBC46914A3F95F570FAB3AB92918%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2212%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - 'heading "''India only country to match China''s scale in...'': US senator''s remarks over trust and innovation" [level=2]'
            - img "© Hindustan Times"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/india-only-country-to-match-china-s-scale-in-us-senator-s-remarks-over-trust-and-innovation/ar-AA272rXt?ocid=TobArticle
              - img
        - listitem:
          - 'link "PPF interest rate for July-September 2026: Has government changed 7.1% rate? Here''s what investors should know © The Economic Times"':
            - /url: /search?q=PPF+interest+rate+for+July-September+2026%3a+Has+government+changed+7.1%25+rate%3f+Here%27s+what+investors+should+know&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_33ACC1F2D3476F70C1C722B9C085485A%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2213%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - 'heading "PPF interest rate for July-September 2026: Has government changed 7.1% rate? Here''s what investors should know" [level=2]'
            - img "© The Economic Times"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/money/news/ppf-interest-rate-for-july-september-2026-has-government-changed-7-1-rate-here-s-what-investors-should-know/ar-AA272V4J?ocid=TobArticle
              - img
        - listitem:
          - link "Kunal Shah may have expected WhatsApp Pay's challenges. He didn't see the username battle coming © Live Mint":
            - /url: /search?q=Kunal+Shah+may+have+expected+WhatsApp+Pay%27s+challenges.+He+didn%27t+see+the+username+battle+coming&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_E24DCA6EFFDFB3A2AC53CD4F5DD00C83%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2214%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - heading "Kunal Shah may have expected WhatsApp Pay's challenges. He didn't see the username battle coming" [level=2]
            - img "© Live Mint"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/money/news/kunal-shah-may-have-expected-whatsapp-pay-s-challenges-he-didn-t-see-the-username-battle-coming/ar-AA272pTN?ocid=TobArticle
              - img
        - listitem:
          - 'link "Diljit Dosanjh says he doesn’t access his bank accounts: ‘No idea how much money I have’ © The Indian Express"':
            - /url: /search?q=Diljit+Dosanjh+says+he+doesn%e2%80%99t+access+his+bank+accounts%3a+%e2%80%98No+idea+how+much+money+I+have%e2%80%99&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_0CB675F138AF2EAF33B9D0B4009C51B6%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2215%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - 'heading "Diljit Dosanjh says he doesn’t access his bank accounts: ‘No idea how much money I have’" [level=2]'
            - img "© The Indian Express"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/money/topstories/diljit-dosanjh-says-he-doesn-t-access-his-bank-accounts-no-idea-how-much-money-i-have/ar-AA272HUH?ocid=TobArticle
              - img
        - listitem:
          - 'link "‘I could never have become CEO in India’: Why Indra Nooyi believes this © ABP - Live"':
            - /url: /search?q=%e2%80%98I+could+never+have+become+CEO+in+India%e2%80%99%3a+Why+Indra+Nooyi+believes+this&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_23A6A682CD277EC34A2C68B07EE4955D%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2216%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - 'heading "‘I could never have become CEO in India’: Why Indra Nooyi believes this" [level=2]'
            - img "© ABP - Live"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/entertainment/news/i-could-never-have-become-ceo-in-india-why-indra-nooyi-believes-this/ar-AA272tcS?ocid=TobArticle
              - img
        - listitem:
          - 'link "Munna Bhai, 3 Idiots, PK in one film: Rajkumar Hirani reveals he ''attempted to combine'' iconic characters - Exclusive © Times Now"':
            - /url: /search?q=Munna+Bhai%2c+3+Idiots%2c+PK+in+one+film%3a+Rajkumar+Hirani+reveals+he+%27attempted+to+combine%27+iconic+characters+-+Exclusive&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_A3AF734147E954289C1BF288D4FD49C6%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2217%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - 'heading "Munna Bhai, 3 Idiots, PK in one film: Rajkumar Hirani reveals he ''attempted to combine'' iconic characters - Exclusive" [level=2]'
            - img "© Times Now"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/entertainment/bollywood/munna-bhai-3-idiots-pk-in-one-film-rajkumar-hirani-reveals-he-attempted-to-combine-iconic-characters-exclusive/ar-AA272n99?ocid=TobArticle
              - img
        - listitem:
          - link "CCTV captures moment Venezuela earthquake topples building © KameraOne":
            - /url: /search?q=CCTV+captures+moment+Venezuela+earthquake+topples+building&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_F26E4B5473EF1F70782B47C0C7565C9D%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2218%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - heading "CCTV captures moment Venezuela earthquake topples building" [level=2]
            - img "© KameraOne"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/world/cctv-captures-moment-venezuela-earthquake-topples-building/vi-AA2732yg?ocid=TobArticle
              - img
        - listitem:
          - link "Rainwater hides open drain; woman, children and others fall in, CCTV shows shocking moments in Junagadh © Times Now":
            - /url: /search?q=Rainwater+hides+open+drain%3b+woman%2c+children+and+others+fall+in%2c+CCTV+shows+shocking+moments+in+Junagadh&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_075D1140F96A9BE0BE3CA3B58D89E5A3%22+tnVersion%3a%22967c4592-846a-40d3-9a2c-48d7192069e2%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2219%22+tnOrder%3a%22b519cd73-8247-45e0-8344-efd9eaed10e2%22&form=HPNN01
            - heading "Rainwater hides open drain; woman, children and others fall in, CCTV shows shocking moments in Junagadh" [level=2]
            - img "© Times Now"
            - link "Read Article":
              - /url: https://www.msn.com/en-in/news/India/rainwater-hides-open-drain-woman-children-and-others-fall-in-cctv-shows-shocking-moments-in-junagadh/ar-AA272PDL?ocid=TobArticle
              - img
- complementary:
  - text: DISCOVER
  - main:
    - article "Your eyes are warning you, 5 silent signs you should never ignore":
      - text: Times Now
      - link "Your eyes are warning you, 5 silent signs you should never ignore, Times Now":
        - /url: https://www.msn.com/en-in/health/other/your-eyes-are-warning-you-5-silent-signs-you-should-never-ignore/ar-AA1ZE9Ro
        - text: Your eyes are warning you, 5 silent signs you should never ignore
      - button "Hide this story"
      - button "See more"
    - 'article "Who should avoid eating jamuns: Know the potential health risks"':
      - text: The Times of India
      - 'link "Who should avoid eating jamuns: Know the potential health risks, The Times of India"':
        - /url: https://www.msn.com/en-in/health/other/who-should-avoid-eating-jamuns-know-the-potential-health-risks/ar-AA1LRiuw
        - text: "Who should avoid eating jamuns: Know the potential health risks"
      - button "Hide this story"
      - button "See more"
    - article
    - article
    - article
    - 'article "Mumbai rain mayhem: Man dies after falling into manhole"':
      - text: NDTV 24x7 2h
      - 'link "Mumbai rain mayhem: Man dies after falling into manhole, NDTV 24x7"':
        - /url: https://www.msn.com/en-in/news/india/mumbai-rain-mayhem-man-dies-after-falling-into-manhole/vi-AA273NI5
        - text: "Mumbai rain mayhem: Man dies after falling into manhole"
      - button "Hide this story"
      - button "See more"
    - article "Trisha Krishnan 'still dealing with wedding withdrawals'; shares unseen pic from Kushboo Sundar's daughter's special day":
      - text: Times Now 23h
      - link "Trisha Krishnan 'still dealing with wedding withdrawals'; shares unseen pic from Kushboo Sundar's daughter's special day, Times Now":
        - /url: https://www.msn.com/en-in/entertainment/bollywood/trisha-krishnan-still-dealing-with-wedding-withdrawals-shares-unseen-pic-from-kushboo-sundar-s-daughter-s-special-day/ar-AA26ZtZy
        - text: Trisha Krishnan 'still dealing with wedding withdrawals'; shares unseen pic from Kushboo Sundar's daughter's special day
      - button "Hide this story"
      - button "See more"
    - article
    - article
- contentinfo:
  - text: © 2026 Microsoft
  - list:
    - listitem:
      - link "Privacy and Cookies":
        - /url: //go.microsoft.com/fwlink/?LinkId=521839
    - listitem:
      - link "Legal":
        - /url: //go.microsoft.com/fwlink/?LinkID=246338
    - listitem:
      - link "Advertise":
        - /url: //go.microsoft.com/fwlink/?linkid=868923
    - listitem:
      - link "About our ads":
        - /url: //go.microsoft.com/fwlink/?LinkID=286759
    - listitem:
      - link "Help":
        - /url: //support.microsoft.com/topic/82d20721-2d6f-4012-a13d-d1910ccf203f
    - listitem:
      - link "Feedback":
        - /url: "#"
- dialog "Quick Search"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Bing', async ({ page }) => {
  4  |   await page.goto('https://www.bing.com/');
  5  |   const title = page.title();
  6  |   console.log(title);
  7  |   const currentUrl = page.url();
  8  |   console.log("Current Url : ", currentUrl);
  9  |   await expect(page).toHaveTitle("Search - Microsoft Bing");
  10 |   await expect(page).toHaveURL("https://www.bing.com/")
  11 |   const innertext = await page.locator("#id_s").innerText();
  12 |   console.log("Get Inner Text : ", innertext);
  13 |   const GetAttribute = await page.locator('#sb_form_q').getAttribute
  14 |   console.log("Get Attribute : ", GetAttribute);
  15 |   await page.locator("#sb_form_q").fill("PlayWright");
  16 |   const pw = page.locator("//h2[text() = 'Playwright']");
> 17 |   await expect(pw).toHaveText("Playwright");
     |                    ^ Error: expect(locator).toHaveText(expected) failed
  18 | });
```