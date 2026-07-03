# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Bing.spec.ts >> Bing
- Location: tests\Bing.spec.ts:3:5

# Error details

```
Error: locator.getAttribute: Error: strict mode violation: locator('a') resolved to 57 elements:
    1) <a rel="noopener" target="_blank" class="customIcon" data-h="ID=HpApp,7818.1" href="/chat?FORM=hpcodx&intent=bing">…</a> aka getByRole('link', { name: 'Copilot', exact: true })
    2) <a class="" rel="noopener" target="_blank" href="/images?FORM=Z9LH" data-h="ID=HpApp,9107.1">Images</a> aka getByRole('link', { name: 'Images' })
    3) <a class="" rel="noopener" target="_blank" data-h="ID=HpApp,7808.1" href="/videos?FORM=Z9LH1">Videos</a> aka getByRole('link', { name: 'Videos' })
    4) <a class="" rel="noopener" target="_blank" href="/shop?FORM=Z9LHS4" data-h="ID=HpApp,12468.1">Shopping</a> aka getByRole('link', { name: 'Shopping' })
    5) <a class="" rel="noopener" target="_blank" href="/maps?FORM=Z9LH2" data-h="ID=HpApp,7692.1">Maps</a> aka getByRole('link', { name: 'Maps' })
    6) <a class="" rel="noopener" target="_blank" data-h="ID=HpApp,6720.1" href="/news/search?q=Top+stories&nvaug=%5bNewsVertical+Category%3d%22rt_MaxClass%22%5d&FORM=Z9LH3">News</a> aka getByRole('link', { name: 'News' })
    7) <a class="" tabindex="-1" rel="noopener" target="_blank" data-h="ID=HpApp,7808.1" href="/videos?FORM=Z9LH1">Videos</a> aka getByLabel('Videos').getByText('Videos')
    8) <a class="" tabindex="-1" rel="noopener" target="_blank" href="/shop?FORM=Z9LHS4" data-h="ID=HpApp,12468.1">Shopping</a> aka getByLabel('Shopping').getByText('Shopping')
    9) <a class="" tabindex="-1" rel="noopener" target="_blank" data-h="ID=HpApp,14108.1" href="/search?q=Bing+translate&FORM=TTAHP1">Translate</a> aka getByText('Translate')
    10) <a class="" tabindex="-1" rel="noopener" target="_blank" href="/maps?FORM=Z9LH2" data-h="ID=HpApp,7692.1">Maps</a> aka getByLabel('Maps').getByText('Maps')
    ...

Call log:
  - waiting for locator('a')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - main [ref=e16]:
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Microsoft Logo Image" [level=1] [ref=e19]:
          - img "Microsoft Logo Image" [ref=e20] [cursor=pointer]
        - navigation [ref=e28]:
          - menubar [ref=e29]:
            - menuitem "Copilot" [ref=e30] [cursor=pointer]:
              - link "Copilot" [ref=e31]:
                - /url: /chat?FORM=hpcodx&intent=bing
                - generic [ref=e33]: Copilot
            - menuitem "Images" [ref=e34] [cursor=pointer]:
              - link "Images" [ref=e35]:
                - /url: /images?FORM=Z9LH
            - menuitem "Videos" [ref=e36] [cursor=pointer]:
              - link "Videos" [ref=e37]:
                - /url: /videos?FORM=Z9LH1
            - menuitem "Shopping" [ref=e38] [cursor=pointer]:
              - link "Shopping" [ref=e39]:
                - /url: /shop?FORM=Z9LHS4
            - menuitem "Maps" [ref=e40] [cursor=pointer]:
              - link "Maps" [ref=e41]:
                - /url: /maps?FORM=Z9LH2
            - menuitem "News" [ref=e42] [cursor=pointer]:
              - link "News" [ref=e43]:
                - /url: /news/search?q=Top+stories&nvaug=%5bNewsVertical+Category%3d%22rt_MaxClass%22%5d&FORM=Z9LH3
            - menuitem ". . . More" [ref=e44] [cursor=pointer]:
              - text: . . .
              - button "More" [ref=e45]
      - complementary "Account Rewards and Preferences" [ref=e48]:
        - link "Sign in Sign in" [ref=e49] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=e50]: Sign in
          - generic "Sign in" [ref=e51]
        - button "Microsoft Rewards" [ref=e52] [cursor=pointer]:
          - generic [ref=e54]:
            - generic [ref=e55]: Rewards
            - img [ref=e57]
        - button "Mobile" [ref=e62] [cursor=pointer]:
          - generic [ref=e63]: Mobile
          - img [ref=e64]
        - button "Settings and quick links" [ref=e66] [cursor=pointer]
    - generic [ref=e67]:
      - search [ref=e68]:
        - img [ref=e70] [cursor=pointer]
        - combobox "Enter your search here - Search suggestions will show as you type" [active] [ref=e74]:
          - status [ref=e76]
        - button "Search using voice" [ref=e78] [cursor=pointer]:
          - img [ref=e79]
        - button "Search using an image" [ref=e84] [cursor=pointer]
        - link "Open Copilot" [ref=e85] [cursor=pointer]:
          - /url: /chat?FORM=hpcodx&intent=bing
        - group "Languages:" [ref=e89]:
          - generic [ref=e90]: "Languages:"
          - link "Hindi" [ref=e91] [cursor=pointer]:
            - /url: /?setlang=hi&cc=in&cc=IN
            - text: हिंदी
          - link "Bangla" [ref=e92] [cursor=pointer]:
            - /url: /?setlang=bn&cc=in&cc=IN
            - text: বাংলা
          - link "Urdu" [ref=e93] [cursor=pointer]:
            - /url: /?setlang=ur&cc=in&cc=IN
            - text: اردو
          - link "Punjabi (Gurmukhi)" [ref=e94] [cursor=pointer]:
            - /url: /?setlang=pa-guru&cc=in&cc=IN
            - text: ਪੰਜਾਬੀ
          - link "Marathi" [ref=e95] [cursor=pointer]:
            - /url: /?setlang=mr&cc=in&cc=IN
            - text: मराठी
          - link "Telugu" [ref=e96] [cursor=pointer]:
            - /url: /?setlang=te&cc=in&cc=IN
            - text: తెలుగు
          - link "Tamil" [ref=e97] [cursor=pointer]:
            - /url: /?setlang=ta&cc=in&cc=IN
            - text: தமிழ்
          - link "Kannada" [ref=e98] [cursor=pointer]:
            - /url: /?setlang=kn&cc=in&cc=IN
            - text: ಕನ್ನಡ
          - link "Gujarati" [ref=e99] [cursor=pointer]:
            - /url: /?setlang=gu&cc=in&cc=IN
            - text: ગુજરાતી
          - link "Malayalam" [ref=e100] [cursor=pointer]:
            - /url: /?setlang=ml&cc=in&cc=IN
            - text: മലയാളം
          - link "Odia" [ref=e101] [cursor=pointer]:
            - /url: /?setlang=or&cc=in&cc=IN
            - text: ଓଡ଼ିଆ
      - generic [ref=e104]:
        - link "Image creator" [ref=e105] [cursor=pointer]:
          - /url: /images/create/ai-image-generator?bicsource=hp&FORM=bicbhp
          - generic [ref=e107]: Image creator
        - link "Video creator" [ref=e108] [cursor=pointer]:
          - /url: /images/create/ai-video-generator?bicsource=hp&FORM=bvcbhp
          - generic [ref=e110]: Video creator
        - link "Text creator" [ref=e111] [cursor=pointer]:
          - /url: /search?q=bing ai writing&FORM=btcbhp
          - generic [ref=e113]: Text creator
  - generic [ref=e116]:
    - generic [ref=e117]:
      - dialog "Bing homepage quiz Which ancient deity was central to the Temple of Esna?" [ref=e119]:
        - group "Bing homepage quiz Which ancient deity was central to the Temple of Esna?" [ref=e120]:
          - generic [ref=e121]: Bing homepage quiz
          - generic [ref=e122]: Which ancient deity was central to the Temple of Esna?
          - list [ref=e123]:
            - listitem [ref=e124]:
              - 'link "Answer: A, Horus, 1 of 3" [ref=e125] [cursor=pointer]':
                - /url: /search?q=Khnum&filters=mgzv3configlist%3A%22BingQA_Quiz_layout%22+IsConversation%3A%22True%22+btrequestsource%3A%22homepage%22+WQOskey%3A%22HPQuiz_20260702_TempleEsna%22+WQId%3A%221%22+WQQI%3A%220%22+WQCI%3A%220%22+UserChoices%3A%220%22+ShowTimesTaskPaneTrigger%3A%22false%22+WQSCORE%3A%220%22&FORM=HPQUIZ
                - generic [ref=e126]: A
                - text: Horus
            - listitem [ref=e127]:
              - 'link "Answer: B, Khnum, 2 of 3" [ref=e128] [cursor=pointer]':
                - /url: /search?q=Khnum&filters=mgzv3configlist%3A%22BingQA_Quiz_layout%22+IsConversation%3A%22True%22+btrequestsource%3A%22homepage%22+WQOskey%3A%22HPQuiz_20260702_TempleEsna%22+WQId%3A%221%22+WQQI%3A%220%22+WQCI%3A%221%22+UserChoices%3A%221%22+ShowTimesTaskPaneTrigger%3A%22false%22+WQSCORE%3A%221%22&FORM=HPQUIZ
                - generic [ref=e129]: B
                - text: Khnum
            - listitem [ref=e130]:
              - 'link "Answer: C, Osiris, 3 of 3" [ref=e131] [cursor=pointer]':
                - /url: /search?q=Khnum&filters=mgzv3configlist%3A%22BingQA_Quiz_layout%22+IsConversation%3A%22True%22+btrequestsource%3A%22homepage%22+WQOskey%3A%22HPQuiz_20260702_TempleEsna%22+WQId%3A%221%22+WQQI%3A%220%22+WQCI%3A%222%22+UserChoices%3A%222%22+ShowTimesTaskPaneTrigger%3A%22false%22+WQSCORE%3A%220%22&FORM=HPQUIZ
                - generic [ref=e132]: C
                - text: Osiris
      - generic [ref=e133]:
        - generic:
          - generic:
            - link "Get the Bing Wallpaper app":
              - /url: https://go.microsoft.com/fwlink/?linkid=2127455
              - generic: Get the Bing Wallpaper app
          - 'heading "Image of the day: Ceiling of the Temple of Esna, Egypt" [level=3]':
            - 'link "Image of the day: Ceiling of the Temple of Esna, Egypt"':
              - /url: /search?q=Temple+of+Esna+Egypt&form=hpcapt&filters=HpDate:"20260701_1830"+mgzv3configlist:"BingQA_Encyclopedia_Layout"
              - text: Ceiling of the Temple of Esna, Egypt
          - generic:
            - generic: © Nick Brundle Photography/Getty Images
            - list:
              - listitem:
                - button "Download this image. Use of this image is restricted to wallpaper only."
        - generic [ref=e134]:
          - link "Inside Esna's sacred universe" [ref=e136] [cursor=pointer]:
            - /url: /search?q=Temple+of+Esna+Egypt&form=hpcapt&filters=HpDate:"20260701_1830"+mgzv3configlist:"BingQA_Encyclopedia_Layout"
            - img [ref=e138]
            - heading "Inside Esna's sacred universe" [level=2] [ref=e141]
          - generic [ref=e142] [cursor=pointer]:
            - status [ref=e143]
            - button "Previous image" [ref=e144]
            - button "Next image" [disabled] [ref=e146]
    - button "Feedback" [ref=e148] [cursor=pointer]:
      - img [ref=e149]
      - generic: Feedback
    - generic [ref=e151]:
      - region "Trending on Bing" [ref=e152]:
        - generic:
          - status [ref=e153]
          - button "Toggle feed area position" [expanded] [ref=e154] [cursor=pointer]
          - button "Previous news" [disabled]
          - button "More news" [ref=e156] [cursor=pointer]
        - list [ref=e158]:
          - listitem [ref=e159]:
            - list [ref=e160]:
              - listitem [ref=e161] [cursor=pointer]:
                - link "CM Vijay's government in danger? What we know about the TVK-DMK 'horse-trading' row © Hindustan Times" [ref=e162]:
                  - /url: /search?q=CM+Vijay%27s+government+in+danger%3f+What+we+know+about+the+TVK-DMK+%27horse-trading%27+row&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_35E6133694EC571A6E180432BB25FFFA%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%220%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e163]:
                    - heading "CM Vijay's government in danger? What we know about the TVK-DMK 'horse-trading' row" [level=2] [ref=e164]:
                      - generic [ref=e165]: CM Vijay's government in danger? What we know about the TVK-DMK 'horse-trading' row
                    - img "© Hindustan Times" [ref=e166]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/news/India/cm-vijay-s-government-in-danger-what-we-know-about-the-tvk-dmk-horse-trading-row/ar-AA272iHy?ocid=TobArticle
                      - img [ref=e167]
              - listitem [ref=e170] [cursor=pointer]:
                - link "Melania mentions Epstein... and contradicts Trump’s own narrative © Penguinz0" [ref=e171]:
                  - /url: /search?q=Melania+mentions+Epstein...+and+contradicts+Trump%e2%80%99s+own+narrative&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_5F0ECAA28648F5A30D2E9E2097970DE3%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%221%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e172]:
                    - heading "Melania mentions Epstein... and contradicts Trump’s own narrative" [level=2] [ref=e173]:
                      - generic [ref=e174]: Melania mentions Epstein... and contradicts Trump’s own narrative
                    - img "© Penguinz0" [ref=e175]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/news/other/melania-mentions-epstein-and-contradicts-trump-s-own-narrative/vi-AA20RS3m?ocid=TobArticle
                      - img [ref=e176]
              - listitem [ref=e179] [cursor=pointer]:
                - 'link "‘Thank you, Didi’: Blinkit rider gets Rs 500 tip on Rs 15 order, says it equals two days’ earnings © News18" [ref=e180]':
                  - /url: /search?q=%e2%80%98Thank+you%2c+Didi%e2%80%99%3a+Blinkit+rider+gets+Rs+500+tip+on+Rs+15+order%2c+says+it+equals+two+days%e2%80%99+earnings&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_00DE826C38CCE5610ACE0D107D25023F%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%222%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e181]:
                    - 'heading "‘Thank you, Didi’: Blinkit rider gets Rs 500 tip on Rs 15 order, says it equals two days’ earnings" [level=2] [ref=e182]':
                      - generic [ref=e183]: "‘Thank you, Didi’: Blinkit rider gets Rs 500 tip on Rs 15 order, says it equals two days’ earnings"
                    - img "© News18" [ref=e184]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/news/India/thank-you-didi-blinkit-rider-gets-rs-500-tip-on-rs-15-order-says-it-equals-two-days-earnings/ar-AA272TCp?ocid=TobArticle
                      - img [ref=e185]
              - listitem [ref=e188] [cursor=pointer]:
                - link "Watch what happens after a 76-year-old woman withdraws $20,000 for scammers © Scammer Payback" [ref=e189]:
                  - /url: /search?q=Watch+what+happens+after+a+76-year-old+woman+withdraws+%2420%2c000+for+scammers&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_6D16FC897E3A4873B6339F71DD43C068%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%223%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e190]:
                    - heading "Watch what happens after a 76-year-old woman withdraws $20,000 for scammers" [level=2] [ref=e191]:
                      - generic [ref=e192]: Watch what happens after a 76-year-old woman withdraws $20,000 for scammers
                    - img "© Scammer Payback" [ref=e193]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/news/other/watch-what-happens-after-a-76-year-old-woman-withdraws-20-000-for-scammers/vi-AA25aPsS?ocid=TobArticle
                      - img [ref=e194]
              - listitem [ref=e197] [cursor=pointer]:
                - 'link "Raja Raghuvanshi murder case: SC agrees to urgent Friday hearing after Meghalaya govt challenges Sonam''s bail © The Daily Jagran" [ref=e198]':
                  - /url: /search?q=Raja+Raghuvanshi+murder+case%3a+SC+agrees+to+urgent+Friday+hearing+after+Meghalaya+govt+challenges+Sonam%27s+bail&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_4D1ECCD258BD34DC06F8DEA9E6BD14A5%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%224%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e199]:
                    - 'heading "Raja Raghuvanshi murder case: SC agrees to urgent Friday hearing after Meghalaya govt challenges Sonam''s bail" [level=2] [ref=e200]':
                      - generic [ref=e201]: "Raja Raghuvanshi murder case: SC agrees to urgent Friday hearing after Meghalaya govt challenges Sonam's bail"
                    - img "© The Daily Jagran" [ref=e202]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/news/India/raja-raghuvanshi-murder-case-sc-agrees-to-urgent-friday-hearing-after-meghalaya-govt-challenges-sonam-s-bail/ar-AA2735oi?ocid=TobArticle
                      - img [ref=e203]
              - listitem [ref=e206] [cursor=pointer]:
                - 'link "Bilateral on paper, international in practice: Pakistan''s Shimla U-turn on Kashmir © The Sunday Guardian" [ref=e207]':
                  - /url: /search?q=Bilateral+on+paper%2c+international+in+practice%3a+Pakistan%27s+Shimla+U-turn+on+Kashmir&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_7A9698CB8D52C9341742825DAAD7B2B3%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%225%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e208]:
                    - 'heading "Bilateral on paper, international in practice: Pakistan''s Shimla U-turn on Kashmir" [level=2] [ref=e209]':
                      - generic [ref=e210]: "Bilateral on paper, international in practice: Pakistan's Shimla U-turn on Kashmir"
                    - img "© The Sunday Guardian" [ref=e211]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/news/India/bilateral-on-paper-international-in-practice-pakistan-s-shimla-u-turn-on-kashmir/ar-AA272nbk?ocid=TobArticle
                      - img [ref=e212]
              - listitem [ref=e215] [cursor=pointer]:
                - link "Shreyas Iyer scripts history, becomes first Indian captain to... © The Times of India" [ref=e216]:
                  - /url: /search?q=Shreyas+Iyer+scripts+history%2c+becomes+first+Indian+captain+to...&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_E1567FA377BEAB8A32FED77D2AAE620F%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%226%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e217]:
                    - heading "Shreyas Iyer scripts history, becomes first Indian captain to..." [level=2] [ref=e218]:
                      - generic [ref=e219]: Shreyas Iyer scripts history, becomes first Indian captain to...
                    - img "© The Times of India" [ref=e220]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/sports/cricket/shreyas-iyer-scripts-history-becomes-first-indian-captain-to/ar-AA273foQ?ocid=TobArticle
                      - img [ref=e221]
              - listitem [ref=e224] [cursor=pointer]:
                - 'link "''Our home was burned in Kashmir, now our only son is gone'': Gurugram parents seek justice after Delhi hit-and-run © Times Now" [ref=e225]':
                  - /url: /search?q=%27Our+home+was+burned+in+Kashmir%2c+now+our+only+son+is+gone%27%3a+Gurugram+parents+seek+justice+after+Delhi+hit-and-run&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_A7E512D66BDC263B1B886C382D937F29%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%227%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e226]:
                    - 'heading "''Our home was burned in Kashmir, now our only son is gone'': Gurugram parents seek justice after Delhi hit-and-run" [level=2] [ref=e227]':
                      - generic [ref=e228]: "'Our home was burned in Kashmir, now our only son is gone': Gurugram parents seek justice after Delhi hit-and-run"
                    - img "© Times Now" [ref=e229]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/news/India/our-home-was-burned-in-kashmir-now-our-only-son-is-gone-gurugram-parents-seek-justice-after-delhi-hit-and-run/ar-AA2736qb?ocid=TobArticle
                      - img [ref=e230]
              - listitem [ref=e233] [cursor=pointer]:
                - 'link "Aadhav Arjuna issues challenge to Red Giant Movies: ''We will not allow them to release films'' © Cinemaexpress" [ref=e234]':
                  - /url: /search?q=Aadhav+Arjuna+issues+challenge+to+Red+Giant+Movies%3a+%27We+will+not+allow+them+to+release+films%27&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_71D30CE2263E79DAA94107DE766D015F%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%228%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e235]:
                    - 'heading "Aadhav Arjuna issues challenge to Red Giant Movies: ''We will not allow them to release films''" [level=2] [ref=e236]':
                      - generic [ref=e237]: "Aadhav Arjuna issues challenge to Red Giant Movies: 'We will not allow them to release films'"
                    - img "© Cinemaexpress" [ref=e238]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/lifestyle/relationships/aadhav-arjuna-issues-challenge-to-red-giant-movies-we-will-not-allow-them-to-release-films/ar-AA273tXI?ocid=TobArticle
                      - img [ref=e239]
              - listitem [ref=e242] [cursor=pointer]:
                - 'link "New EPFO rules are here: 7 questions every salaried employee is asking © News18" [ref=e243]':
                  - /url: /search?q=New+EPFO+rules+are+here%3a+7+questions+every+salaried+employee+is+asking&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_F6644EF6E006D4C9DFF92BE2478BAC08%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%229%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e244]:
                    - 'heading "New EPFO rules are here: 7 questions every salaried employee is asking" [level=2] [ref=e245]':
                      - generic [ref=e246]: "New EPFO rules are here: 7 questions every salaried employee is asking"
                    - img "© News18" [ref=e247]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/news/India/new-epfo-rules-are-here-7-questions-every-salaried-employee-is-asking/ar-AA273n7g?ocid=TobArticle
                      - img [ref=e248]
              - listitem [ref=e251] [cursor=pointer]:
                - 'link "How Bengal is taking a ''right'' turn: What Suvendu Adhikari changed in post-Mamata era © The Times of India" [ref=e252]':
                  - /url: /search?q=How+Bengal+is+taking+a+%27right%27+turn%3a+What+Suvendu+Adhikari+changed+in+post-Mamata+era&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_1E812F7CE24556840A70E63CA9266D0C%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2210%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e253]:
                    - 'heading "How Bengal is taking a ''right'' turn: What Suvendu Adhikari changed in post-Mamata era" [level=2] [ref=e254]':
                      - generic [ref=e255]: "How Bengal is taking a 'right' turn: What Suvendu Adhikari changed in post-Mamata era"
                    - img "© The Times of India" [ref=e256]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/news/other/how-bengal-is-taking-a-right-turn-what-suvendu-adhikari-changed-in-post-mamata-era/ar-AA273su0?ocid=TobArticle
                      - img [ref=e257]
              - listitem [ref=e260] [cursor=pointer]:
                - link "Lake Mead hit a record low - and bodies started surfacing © Practical Engineering" [ref=e261]:
                  - /url: /search?q=Lake+Mead+hit+a+record+low+-+and+bodies+started+surfacing&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_7926AF7953E15327C204CF3B6D856257%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2211%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e262]:
                    - heading "Lake Mead hit a record low - and bodies started surfacing" [level=2] [ref=e263]:
                      - generic [ref=e264]: Lake Mead hit a record low - and bodies started surfacing
                    - img "© Practical Engineering" [ref=e265]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/weather/topstories/lake-mead-hit-a-record-low-and-bodies-started-surfacing/vi-AA26BFmB?ocid=TobArticle
                      - img [ref=e266]
              - listitem [ref=e269] [cursor=pointer]:
                - 'link "‘I could never have become CEO in India’: Why Indra Nooyi believes this © ABP - Live" [ref=e270]':
                  - /url: /search?q=%e2%80%98I+could+never+have+become+CEO+in+India%e2%80%99%3a+Why+Indra+Nooyi+believes+this&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_23A6A682CD277EC34A2C68B07EE4955D%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2212%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e271]:
                    - 'heading "‘I could never have become CEO in India’: Why Indra Nooyi believes this" [level=2] [ref=e272]':
                      - generic [ref=e273]: "‘I could never have become CEO in India’: Why Indra Nooyi believes this"
                    - img "© ABP - Live" [ref=e274]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/entertainment/news/i-could-never-have-become-ceo-in-india-why-indra-nooyi-believes-this/ar-AA272tcS?ocid=TobArticle
                      - img [ref=e275]
              - listitem [ref=e278] [cursor=pointer]:
                - 'link "''Main Kalank Lekar Nahi Jaunga... Sewa Poori Ho Gayi'': Champat Rai amid Ram Mandir donation probe © Times Now" [ref=e279]':
                  - /url: /search?q=%27Main+Kalank+Lekar+Nahi+Jaunga...+Sewa+Poori+Ho+Gayi%27%3a+Champat+Rai+amid+Ram+Mandir+donation+probe&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_6F680E74EF9D20FCC3727DBF427DA4F6%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2213%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e280]:
                    - 'heading "''Main Kalank Lekar Nahi Jaunga... Sewa Poori Ho Gayi'': Champat Rai amid Ram Mandir donation probe" [level=2] [ref=e281]':
                      - generic [ref=e282]: "'Main Kalank Lekar Nahi Jaunga... Sewa Poori Ho Gayi': Champat Rai amid Ram Mandir donation probe"
                    - img "© Times Now" [ref=e283]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/news/India/main-kalank-lekar-nahi-jaunga-sewa-poori-ho-gayi-champat-rai-amid-ram-mandir-donation-probe/ar-AA27304p?ocid=TobArticle
                      - img [ref=e284]
              - listitem [ref=e287] [cursor=pointer]:
                - link "Khushbu Sundar hugs Azhaghi Trisha Krishnan; actor says she has wedding withdrawals from ‘drowning in love’ for 4 days © Hindustan Times" [ref=e288]:
                  - /url: /search?q=Khushbu+Sundar+hugs+Azhaghi+Trisha+Krishnan%3b+actor+says+she+has+wedding+withdrawals+from+%e2%80%98drowning+in+love%e2%80%99+for+4+days&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_7F42CBB1C802DA72D616597FE96F3018%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2214%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e289]:
                    - heading "Khushbu Sundar hugs Azhaghi Trisha Krishnan; actor says she has wedding withdrawals from ‘drowning in love’ for 4 days" [level=2] [ref=e290]:
                      - generic [ref=e291]: Khushbu Sundar hugs Azhaghi Trisha Krishnan; actor says she has wedding withdrawals from ‘drowning in love’ for 4 days
                    - img "© Hindustan Times" [ref=e292]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/entertainment/bollywood/khushbu-sundar-hugs-azhaghi-trisha-krishnan-actor-says-she-has-wedding-withdrawals-from-drowning-in-love-for-4-days/ar-AA274hpk?ocid=TobArticle
                      - img [ref=e293]
              - listitem [ref=e296] [cursor=pointer]:
                - link "Million-dollar house starts sliding off mountain – caught on camera © HeavyDSparks" [ref=e297]:
                  - /url: /search?q=Million-dollar+house+starts+sliding+off+mountain+%e2%80%93+caught+on+camera&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_1B26ABA841DD9775D602EAB89DFB7A8A%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2215%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e298]:
                    - heading "Million-dollar house starts sliding off mountain – caught on camera" [level=2] [ref=e299]:
                      - generic [ref=e300]: Million-dollar house starts sliding off mountain – caught on camera
                    - img "© HeavyDSparks" [ref=e301]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/video/other/million-dollar-house-starts-sliding-off-mountain-caught-on-camera/vi-AA20kmaQ?ocid=TobArticle
                      - img [ref=e302]
              - listitem [ref=e305] [cursor=pointer]:
                - 'link "New EPF rules explained: What Rs 1,800 contribution cap means for you © The Daily Jagran" [ref=e306]':
                  - /url: /search?q=New+EPF+rules+explained%3a+What+Rs+1%2c800+contribution+cap+means+for+you&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_AB5D1A1AF120CA0C818DEC2476E131F4%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2216%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e307]:
                    - 'heading "New EPF rules explained: What Rs 1,800 contribution cap means for you" [level=2] [ref=e308]':
                      - generic [ref=e309]: "New EPF rules explained: What Rs 1,800 contribution cap means for you"
                    - img "© The Daily Jagran" [ref=e310]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/money/news/new-epf-rules-explained-what-rs-1-800-contribution-cap-means-for-you/ar-AA2739Hj?ocid=TobArticle
                      - img [ref=e311]
              - listitem [ref=e314] [cursor=pointer]:
                - link "Karnataka HC stays govt order withdrawing cases in Aland riots, Priyank Kharge says will bring it back © News18" [ref=e315]:
                  - /url: /search?q=Karnataka+HC+stays+govt+order+withdrawing+cases+in+Aland+riots%2c+Priyank+Kharge+says+will+bring+it+back&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_C558BE3FE4E95A9054A427199DF3619C%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2217%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e316]:
                    - heading "Karnataka HC stays govt order withdrawing cases in Aland riots, Priyank Kharge says will bring it back" [level=2] [ref=e317]:
                      - generic [ref=e318]: Karnataka HC stays govt order withdrawing cases in Aland riots, Priyank Kharge says will bring it back
                    - img "© News18" [ref=e319]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/news/India/karnataka-hc-stays-govt-order-withdrawing-cases-in-aland-riots-priyank-kharge-says-will-bring-it-back/ar-AA2735nk?ocid=TobArticle
                      - img [ref=e320]
              - listitem [ref=e323] [cursor=pointer]:
                - 'link "''Never been healthier'': Woman quits six-figure corporate job at 33 to become waitress, says IBS vanished © Moneycontrol" [ref=e324]':
                  - /url: /search?q=%27Never+been+healthier%27%3a+Woman+quits+six-figure+corporate+job+at+33+to+become+waitress%2c+says+IBS+vanished&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_3C540A3DA0BA4391377938DD1D2CC000%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2218%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e325]:
                    - 'heading "''Never been healthier'': Woman quits six-figure corporate job at 33 to become waitress, says IBS vanished" [level=2] [ref=e326]':
                      - generic [ref=e327]: "'Never been healthier': Woman quits six-figure corporate job at 33 to become waitress, says IBS vanished"
                    - img "© Moneycontrol" [ref=e328]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/news/India/never-been-healthier-woman-quits-six-figure-corporate-job-at-33-to-become-waitress-says-ibs-vanished/ar-AA272nTV?ocid=TobArticle
                      - img [ref=e329]
              - listitem [ref=e332] [cursor=pointer]:
                - link "Mumbai man falls into manhole while using the phone in heavy rain, dies © Hindustan Times" [ref=e333]:
                  - /url: /search?q=Mumbai+man+falls+into+manhole+while+using+the+phone+in+heavy+rain%2c+dies&efirst=0&ecount=50&filters=tnTID%3a%22TOBP2_6F8D0FBA9AFA9B76D988F5BD4E7CBABB%22+tnVersion%3a%22c1cfc14e-737d-47f2-9b89-e9ce5dbdb35d%22+Segment%3a%22popularnow.carousel%22+tnCol%3a%2219%22+tnOrder%3a%228fac1ac0-d3e2-4c31-a050-edb0f9a084d1%22&form=HPNN01
                  - generic [ref=e334]:
                    - heading "Mumbai man falls into manhole while using the phone in heavy rain, dies" [level=2] [ref=e335]:
                      - generic [ref=e336]: Mumbai man falls into manhole while using the phone in heavy rain, dies
                    - img "© Hindustan Times" [ref=e337]
                    - link "Read Article":
                      - /url: https://www.msn.com/en-in/news/India/mumbai-man-falls-into-manhole-while-using-the-phone-in-heavy-rain-dies/ar-AA2732yt?ocid=TobArticle
                      - img [ref=e338]
      - complementary
    - contentinfo:
      - generic [ref=e341]:
        - generic [ref=e342]: © 2026 Microsoft
        - list [ref=e343]:
          - listitem [ref=e344]:
            - link "Privacy and Cookies" [ref=e345] [cursor=pointer]:
              - /url: //go.microsoft.com/fwlink/?LinkId=521839
          - listitem [ref=e346]:
            - link "Legal" [ref=e347] [cursor=pointer]:
              - /url: //go.microsoft.com/fwlink/?LinkID=246338
          - listitem [ref=e348]:
            - link "Advertise" [ref=e349] [cursor=pointer]:
              - /url: //go.microsoft.com/fwlink/?linkid=868923
          - listitem [ref=e350]:
            - link "About our ads" [ref=e351] [cursor=pointer]:
              - /url: //go.microsoft.com/fwlink/?LinkID=286759
          - listitem [ref=e352]:
            - link "Help" [ref=e353] [cursor=pointer]:
              - /url: //support.microsoft.com/topic/82d20721-2d6f-4012-a13d-d1910ccf203f
          - listitem [ref=e354]:
            - link "Feedback" [ref=e355] [cursor=pointer]:
              - /url: "#"
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
> 13 |   const GetAttribute = await page.locator('a').getAttribute('href');
     |                                                ^ Error: locator.getAttribute: Error: strict mode violation: locator('a') resolved to 57 elements:
  14 |   console.log("Get Attribute : ", GetAttribute);
  15 |   await page.locator("#sb_form_q").fill("PlayWright");
  16 |   const pw = page.locator("//h2[text() = 'Playwright']");
  17 |   await expect(pw).toHaveText("Playwright");
  18 | });
```