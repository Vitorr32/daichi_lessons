import { addFurigana } from "../../utils/functions";
import { EXTRA_CONTENT_COMPOSITED_TABLE_TYPE } from "../../utils/constants";


const daichi_chapters = [
    {
        number: '2',
        title: 'それはなんですか',
        background: 'https://i.imgur.com/uBGB1qz.png',
        description: 'In this chapter we learn how to refer to things around us, like "this", "that" and "there".\n How to make basic questions like "Who?" or "What?" , and finally how to refer to possesions like "Who\'s"',
        grammar: [
            {
                title: 'それは...',
                summary: 'In japanese you can refer to things based in they position in relation to the speaker and the listener, to do that you use one of the three: これ, それ and あれ',
                examples: [
                    {
                        japanese: `<b>これ</b>は${addFurigana('鶏肉', 'とりにく')}です, たべたいですか`,
                        english: 'This is chicken, would you like to eat it?',
                        explanation: 'これ refers to something that is close to the speaker, like in it\'s hand'
                    },
                    {
                        japanese: `<b>それ</b>は${addFurigana('甘', 'あま')}い${addFurigana('紅茶', 'こうちゃ')}です`,
                        english: 'That is a sweet black tea',
                        explanation: 'それ refers to something that is close to the listener, not the speaker'
                    },
                    {
                        japanese: `<b>あれ</b>はあなたのボ-ルペンですか`,
                        english: 'Is that your ballpoint pen?',
                        explanation: 'あれ refers to something that is away from both the listener and speaker'
                    },
                    {
                        japanese: `この木は${addFurigana('桜', 'さくら')}です`,
                        english: 'This tree is a cherry tree',
                        explanation: 'There also exist the この, その and あの, using the same logic but they are obligatorily followed by a noun, therefore they can\'t be used as the sentence subject by itself'
                    },
                    {
                        japanese: `あの${addFurigana('男', 'おとこ')}は${addFurigana('誰', 'だれ')}ですか`,
                        english: 'Who is that man?',
                        explanation: `${addFurigana('誰', 'だれ')} is another type of question the "Who", it is used to speak about a person`
                    },
                    {
                        dialog: true,
                        actors: ["A", "B"],
                        conversation: [
                            {
                                actor: 0,
                                speech: `それは${addFurigana('鶏肉', 'とりにく')}ですか${addFurigana('豚肉', 'ぶたにく')}ですか`
                            },
                            {
                                actor: 1,
                                speech: `${addFurigana('鶏肉', 'とりにく')}です`
                            }
                        ],
                        explanation: 'If you are uncertain what something is between two possibilities, you can join two senteces with ですか with both the possibilities'
                    }
                ]
            },
            {
                title: 'なんですか',
                summary: 'The expression なん is a interreogative word used to ask what something is, it simply means "What"',
                examples: [
                    {
                        japanese: `それはなんですか`,
                        english: 'What is that?',
                        explanation: 'なん can be used with the ですか to form a question about the subject of the sentence'
                    },
                    {
                        japanese: `これはなんの${addFurigana('雑誌', 'ざっし')}ですか`,
                        english: 'What type of maganize is this?',
                        explanation: 'なんの has a slight differente meaning, It is used to ask about the content of something, closely translating to "What kind of"'
                    },
                    {
                        japanese: `あれはあなたのボ-ルペンですか`,
                        english: 'Is that your ballpoint pen?',
                        explanation: 'あれ refers to something that is away from both the listener and speaker'
                    }
                ]
            },
            {
                title: 'わたしの...',
                summary: 'The particle no is mainly used to indicate ownership of someone over something',
                examples: [
                    {
                        japanese: `私のすき${addFurigana('焼', 'さ')}きです`,
                        english: 'My sukiyaki',
                        explanation: 'The particle の indicates ownership, much like the possesive apostrophe \'s as in "John\'s car" with would become "Johnの車"'
                    },
                    {
                        japanese: `それは${addFurigana('誰', 'だれ')}の車ですか`,
                        english: 'Whose is that car?',
                        explanation: `${addFurigana('誰', 'だれ')}の is used to ask about ownership, is would translate closely to "Whose"`
                    }
                ]
            }
        ]
    },
    {
        number: '3',
        title: 'それはなんですか',
        background: 'https://i.imgur.com/nPfpt5n.png',
        description: 'In this chapter we learn we learn to refer to locations, how to indicate where something is, ask how much something costs and inquiry about the origin of something',
        grammar: [
            {
                title: 'ここは...',
                summary: 'In japanese you can refer to places using three methods: ここ, そこ and あそこ',
                examples: [
                    {
                        japanese: `ここは${addFurigana('受付', 'うけつけ')}です`,
                        english: 'This is the reception',
                        explanation: 'ここ refers to somewhere that is close to the speaker, like the place where he is currently in'
                    },
                    {
                        japanese: `そこは${addFurigana('事務室', 'じむしつ')}です`,
                        english: 'That is the office',
                        explanation: 'そこ refers to somewhere that is close to the listener, not the speaker'
                    },
                    {
                        japanese: `あそこは${addFurigana('郵便局', 'ゆうびんきょく')}です`,
                        english: 'There is the post office',
                        explanation: 'あそこ refers to somewhere that is away from both the listener and speaker'
                    },
                    {
                        japanese: `${addFurigana('銀行', 'ぎんこう')}はあそこです`,
                        english: 'The bank is over there',
                        explanation: 'You can use ここ, そこ and あそこ after declaring the subject of the sentence to say where the subject is located, it can be used to things, places and even persons'
                    },
                    {
                        japanese: `${addFurigana('冷蔵庫', 'れいぞうこ')}はどこですか`,
                        english: 'Where is the refrigerator?',
                        explanation: `To ask where something is, you use the どこ before the question, it roughly translate to "Where"`
                    },
                    {
                        dialog: true,
                        actors: ["A", "B"],
                        conversation: [
                            {
                                actor: 0,
                                speech: `それはどこの車ですか`
                            },
                            {
                                actor: 1,
                                speech: `アメリカの車です`
                            }
                        ],
                        explanation: 'You can use どこ with the particle の to inquiry about the origin of something, either from what country it came from or what company if it\'s a product '
                    }
                ]
            },
            {
                title: 'いくらですか',
                summary: 'To inquiry about the price of something, you use the word いくら',
                examples: [
                    {
                        dialog: true,
                        actors: ["A", "B"],
                        conversation: [
                            {
                                actor: 0,
                                speech: `あそこコンビニの${addFurigana('弁当', 'べんとう')}はいくらですか`
                            },
                            {
                                actor: 1,
                                speech: `${addFurigana('弁当', 'べんとう')}は八百円です`
                            }
                        ],
                        explanation: 'You use いくら before the question to ask the price of the subject of the sentence'
                    }
                ],
                extra: [
                    {
                        type: EXTRA_CONTENT_COMPOSITED_TABLE_TYPE,
                        title: 'ここ, これ, この',
                        description: `Now that we leaned all the indication types, we created this table to make it easier to you understand`,
                        headers: [`こ`, `れ`, `の`],
                        rowHeaders: [`Thing`, `Thing/Person`, `Place`],
                        compositedTableHeader: 'Refers to...',
                        content: [
                            [
                                'ここ',
                                'そこ',
                                'あそこ'
                            ],
                            [
                                `これ`,
                                'それ',
                                'あれ'
                            ],
                            [
                                `この + ${addFurigana('名詞', 'めいし')}`,
                                `その + ${addFurigana('名詞', 'めいし')}`,
                                `あの + ${addFurigana('名詞', 'めいし')}`,
                            ]
                        ],
                        legend: []
                    }
                ]
            }
        ]
    },
    {
        number: '4',
        title: '何をしますか',
        background: 'https://i.imgur.com/dKUakdN.png',
        description: `In this chapter we learn how to use verbs, they are called ${addFurigana('動詞', 'どうし')} both in the possitive and negative form. Also we learn how to indicate where a action happens`,
        grammar: [
            {
                title: '...します',
                summary: 'Verbs in the non-past form, meaning either the present or future time, ends with the expression ます',
                examples: [
                    {
                        japanese: `マリアさんは${addFurigana('弁当', 'べんとう')}を買います`,
                        english: 'Maria buys a boxed lunch',
                        explanation: `Here we see the verb 買う in the non-past form 買います, and before it we use the particle を to indicate the sentence action, it can also be used to express the speaker intention`
                    },
                    {
                        japanese: `ゲームをします.それから, 昼ご飯んを食べます`,
                        english: 'I play a game and then eat lunch',
                        explanation: `それから is used to connect two actions with a sense of "one after another", it roughly translate to "and then"`
                    },
                    {
                        japanese: `サッカーとテニスをします`,
                        english: 'I play soccer and tennis',
                        explanation: `The particle と is used to connect two or more nouns to the same action, it roughly translate to "and"`
                    },
                    {
                        dialog: true,
                        actors: ["A", "B"],
                        conversation: [
                            {
                                actor: 0,
                                speech: `マリアさんは何を買います`
                            },
                            {
                                actor: 1,
                                speech: `${addFurigana('弁当', 'べんとう')}を買います`
                            }
                        ],
                        explanation: `何 is a interrogative word, it is used together with a ${addFurigana('動詞', 'どうし')} to ask about the verb action.`
                    },
                    {
                        japanese: `これは何のカタログですか`,
                        english: 'What is this catalog about?',
                        explanation: `When 何 is used together with syllabes from the な(な, ね, に, の, ぬ), た(た, て, ち, と, つ) or だ(だ, で, ど, づ) he is read as なん, not なに`
                    },
                    {
                        japanese: `ここは何${addFurigana('階', 'かい')}ですか`,
                        english: 'What floor is this?',
                        explanation: `何 is read as なん too wehn is used together with counter suffix like: ${addFurigana('階', 'かい')}, 時, ${addFurigana('枚', 'まい')} and others`
                    },
                    {
                        japanese: `家で${addFurigana('料理', 'りょうり')}をします`,
                        english: 'I cook at home',
                        explanation: 'When you use the particle で after a place, you are informing the place where the action is taking, or will take, place'
                    },
                    {
                        japanese: `そのシャツはどこで買いますか`,
                        english: 'Where do you buy that shirt?',
                        explanation: `どこ with the particle で in a phrase with a ${addFurigana('動詞', 'どうし')} is used to ask where an action takes place`
                    }
                ]
            },
            {
                title: '...しません',
                summary: `There's also the negative form of the non-past ${addFurigana('動詞', 'どうし')} the ません`,
                examples: [
                    {
                        japanese: `${addFurigana('宿題', 'しゅくだい')}をしません`,
                        english: 'I do not do my homework',
                        explanation: `To use the negative form of the non-past ${addFurigana('動詞', 'どうし')} you need to substitute the ending ます with ません`
                    },
                    {
                        dialog: true,
                        actors: ["マリア", "カロス "],
                        conversation: [
                            {
                                actor: 1,
                                speech: `マリアさんは何を読みますか`
                            },
                            {
                                actor: 0,
                                speech: `何も読みません`
                            }
                        ],
                        explanation: `何 with the particle も and the negative form of the ${addFurigana('動詞', 'どうし')} indicates a total denial of that action`
                    }
                ]
            }
        ]
    },
    {
        number: '5',
        title: '今は何時ですか',
        background: 'https://i.imgur.com/dKUakdN.png',
        description: `In this chapter we learn how to ask and talk about the current hour of the day, how to indicate at what hour a action takes place, or even during a certain period of time. And we see the past form of the japanese ${addFurigana('動詞', 'どうし')}`,
        grammar: [
            {
                title: '何時ですか',
                summary: `The kanji ${addFurigana('時', 'じ')} is the kanji for hours, and the kanji ${addFurigana('分', 'ふん')} between other things, is used to indicate the minutes, with these two we can indicate at what time something happened`,
                examples: [
                    {
                        japanese: `今は8時30分です`,
                        english: 'Now it\'s 8:30',
                        explanation: `Using the ${addFurigana('時', 'じ')} and ${addFurigana('分', 'ふん')} we can inform what time is now`
                    },
                    {
                        japanese: `私は毎日ち10時20分に${addFurigana('寝', 'ね')}ます`,
                        english: 'I sleep at 10:20 every day',
                        explanation: `To express that a action happened at certain time, you only need to inform the time and use the particle に before the ${addFurigana('動詞', 'どうし')}`
                    },
                    {
                        japanese: `何時に${addFurigana('起', 'お')}きますか`,
                        english: 'At what time does you wake up?',
                        explanation: `To inquiry when a action happens, you use the question 何時 that translate to "what time" with the particle に to indicate that , in this instance means "at", generating a expression "at what time X happen"`
                    },
                    {
                        japanese: `私は${addFurigana('会社', 'かいしゃ')}で8時30分から12時まで${addFurigana('働', 'はたら')}きます`,
                        english: 'I work in the company from 8:30 to 12:00',
                        explanation: `To define a range of time at wich a action takes place, you use から after the start time and まで after the second time, note that then there's no particle between まで and the ${addFurigana('動詞', 'どうし')}`
                    },
                    {
                        japanese: `${addFurigana('説明会', 'せつめいかい')}は何時からですか`,
                        english: 'What time does the briefing start?',
                        explanation: `You can inquiry when something starts, using から, or end, using まで, together with the question expression ですか, You can also state the time something starts or end on the same form but with only です at the end`
                    },
                    {
                        japanese: `10時ごろ${addFurigana('練習', 'れんしゅう')}しました`,
                        english: 'I started praticing at around 10 o\'clock',
                        explanation: `The ごろ particle is used to indicate an aproximate time, it means "around/about"`
                    }
                ]
            },
            {
                title: '..しました',
                summary: `There's also the past form of ${addFurigana('動詞', 'どうし')}, that implies actions that already happened`,
                examples: [
                    {
                        japanese: `先週${addFurigana('定食', 'ていしょく')}を食べました`,
                        english: 'I had a set meal last week',
                        explanation: `To use the past form of a ${addFurigana('動詞', 'どうし')} you have to change the ます to ました, do note that if you use a time specific word like 先週 you should not add a particle after`
                    },
                    {
                        japanese: `昨日${addFurigana('研究', 'けんきゅう')}しませんでした`,
                        english: 'I did not research yesterday',
                        explanation: `To use the negative past form of a ${addFurigana('動詞', 'どうし')} you have to change the ました to ませんでした`
                    }
                ]
            }
        ]
    },
    {
        number: '23',
        title: '上手になりますよ',
        background: 'https://i.imgur.com/yCtOUWW.jpg',
        description: `In this chapter we learn to use the verb なります to indicate a change in state, also how to connect two senteces
        by estabilishing causality`,
        grammar: [
            {
                title: 'なります',
                summary: `なります is a verb that indicates a change of condition and means 'to become'. You can use it with 
                adjectives, verbs and nouns, see the examples:`,
                examples: [
                    {
                        japanese: `暗くなります`,
                        english: `It becomes dark`,
                        explanation: 'When a いけよし adjective is used with なります, the い needs to be replaced with a く'
                    },
                    {
                        japanese: `しずかになります`,
                        english: `It becomes quiet`,
                        explanation: 'With a なけよし, you need to add the particle に at the end of the adjective'
                    },
                    {
                        japanese: `夜になります`,
                        english: `It becomes night`,
                        explanation: `The same occurs with a ${addFurigana('名詞', 'めいし')}, where a particle に is added`
                    }
                ]
            }
        ]
    },
    {
        number: '25',
        title: 'その時は…',
        background: 'https://i.imgur.com/yCtOUWW.jpg',
        description: `In this chapter we learn patterns that allow us to explain ourselves, how to include a question in a bigger
        phrase and to check if something will happen`,
        grammar: [
            {
                title: 'ので',
                summary: `ので gives the reason for the situation that is stated on the following sentece, contrary to the
                ですから that uses the first sentence as the context to explain a subjective reason or opinion`,
                examples: [
                    {
                        japanese: `あの人は有名なので,そのVIPセッションへ入いってもいい`,
                        english: `Because that person is famous he can go in the VIP section`,
                        explanation: 'ので is used when a overral strong statement is made, it should not be used as intention or order'
                    },
                    {
                        japanese: `${addFurigana('携帯', 'けんたい')}電話は${addFurigana('鳴', 'なく')}くので...`,
                        english: `Because that person is famous he can go in the VIP section`,
                        explanation: 'ので is used when a overral strong statement is made, it should not be used as intention or order'
                    }
                ]
            }
        ]
    },
    {
        number: '26',
        title: 'その時は…',
        background: 'https://i.imgur.com/yCtOUWW.jpg',
        description: 'Using とき we can refer to activities realized on certain times or conditions, like childhood or vacation',
        grammar: [
            {
                title: 'その時',
                summary: `You can describe a action that happens in a certain condition using とき at the end of the conditional situation.
                The second sentece then describes a action which happens on the first sentence conditional situation, it can be pretty much anything.
                Careful tough, there's some rules to how the ending of the conditional situation connects with the とき`,
                examples: [
                    {
                        japanese: `${addFurigana('暑', 'あつ')}い時, 泳ぎに行きます`,
                        english: `When it's hot, I go swim`,
                        explanation: 'An いけよし adjective does not need to be flexed in anyway in conjunction with とき'
                    },
                    {
                        japanese: `${addFurigana('暇', 'ひま')}な時, ゲームをします'`,
                        english: `When free, I play games`,
                        explanation: 'An なけよし adjective, as expected, needs the な particle before the とき'
                    },
                    {
                        japanese: 'ゲームをする時, 時間が早くなります',
                        english: `Time goes fast when I play games`,
                        explanation: `An ${addFurigana('動詞', 'どうし')} can be in the ${addFurigana('辞書形', 'じしょけい')} before the とき`
                    },
                    {
                        japanese: `子供の時, 木に ${addFurigana('登', 'のぼ')}ります`,
                        english: `When a child, I would climb trees`,
                        explanation: `An ${addFurigana('名詞', 'めいし')} demands an の particle before the とき`
                    },
                    {
                        japanese: `${addFurigana('言葉', 'ことば')}がわからない時, ${addFurigana('辞書', 'じしょ')}を使います`,
                        english: `When I don't understand a word, I use the dicionary`,
                        explanation: `An ${addFurigana('動詞', 'どうし')} can be used in the negative form too! it needs to go with the informal form with とき`
                    }
                ]
            },
            {
                title: '前にですか? 後にですか?',
                summary: `You can use use ${addFurigana('動詞', 'どうし')} on the past form with とき, but be warned that it can change the phrase context or meaning.
                    It can change what action was completed or not, determine if the action happened before, will happen after or is happening during the first sentence condition and so forth`,
                examples: [
                    {
                        japanese: `${addFurigana('広島', 'ひろしま')}へ行く時, 列車チケットを買いました`,
                        english: `I buyed the train ticket before going to Hiroshima`,
                        explanation: `If the first sentence ends with a ${addFurigana('辞書形', 'じしょけい')} ${addFurigana('動詞', 'どうし')} 
                            and the second with one in the past form, the first sentence is a condition that already endend, while the second 
                            happened before or during it, depending on context`
                    },
                    {
                        japanese: `${addFurigana('広島', 'ひろしま')}へ行った時, ${addFurigana('広島城', 'ひろしましろ')}を見ました`,
                        english: `I saw the Hiroshima Castle after I got to Hiroshima`,
                        explanation: `If the first sentence ends with a past form ${addFurigana('動詞', 'どうし')} 
                            and the second with one too, the second sentece was done at the end of the first`
                    },
                    {
                        japanese: `${addFurigana('広島', 'ひろしま')}へ来た時, 母にお${addFurigana('土産', 'どさん')}をあげる`,
                        english: `When I arrive in Hiroshima, I will give mother a souvenir`,
                        explanation: `If the first sentence ends with a past form but the second don't, it means that the first
                        sentence is still incomplete, and that the second sentence action will happen after the first is concluded`
                    },
                    {
                        japanese: `${addFurigana('広島', 'ひろしま')}へ行く時, ${addFurigana('犬', 'いぬ')}の${addFurigana('器', 'うつわ')}に食べ物を入れる`,
                        english: `Before I gone to Hiroshima, I put food in the dog's bowl`,
                        explanation: `If the first and second sentecen ends with a ${addFurigana('動詞', 'どうし')} in the 
                            ${addFurigana('辞書形', 'じしょけい')} in means that the first sentence still haven't happened, and the second will
                            be realized before it happens`
                    }
                ],
                extra: [
                    {
                        type: EXTRA_CONTENT_COMPOSITED_TABLE_TYPE,
                        title: 'Quick Hint',
                        description: `To make things easier to understand, we made the following table to guide you in the forms that the ${addFurigana('動詞', 'どうし')} can take and what it implies`,
                        headers: [`1${addFurigana('句', 'く')} ${addFurigana('辞書形', 'じしょけい')}`, `1${addFurigana('句', 'く')} ${addFurigana('他動詞', 'たどうし')}`],
                        rowHeaders: [`2${addFurigana('句', 'く')} ${addFurigana('辞書形', 'じしょけい')}`, `2${addFurigana('句', 'く')} ${addFurigana('他動詞', 'たどうし')}`],
                        compositedTableHeader: 'Sentences',
                        content: [
                            [
                                'First sentence not over, Second will happen before it',
                                'First sentence not over, second will happen after it',
                            ],
                            [
                                'Firt sentence is over, second happened before or during it',
                                'First sentence is over, second happened after it'
                            ]
                        ],
                        legend: []
                    }
                ]
            },
            {
                title: 'なにがなければなりませんか?',
                summary: `When you need to specify a action that is nescessary or required you can use use なければなりませんか.
                It need to be used with a ${addFurigana('動詞', 'どうし')} that is in the negative and informal form followed by  なければなりませんか`,
                examples: [
                    {
                        japanese: `${addFurigana('勉強', 'べんきょう')}しなければなりません`,
                        english: `I must study`,
                        explanation: `using なければなりません indicates a urgency or need to a actions to be peformed without fail`
                    },
                    {
                        dialog: true,
                        actors: ['ポロー', '信長'],
                        conversation: [
                            {
                                actor: '信長',
                                speech: 'ポローさん, 今日暇だったら, 映画を見に行きませんか'
                            },
                            {
                                //Actor can be either it's name or index in array
                                actor: 0,
                                speech: 'すみません, 今日の午後はブラジル大使館へ行かなければなりません'
                            },
                            {
                                actor: 1,
                                speech: 'ええ-, なんですか'
                            },
                            {
                                actor: 'ポロー',
                                speech: `ビザを${addFurigana('一新', 'いっしん')}しに行く, ブラジル人が日本に住むにはビザで持たなければなりません`
                            },
                            {
                                actor: 1,
                                speech: `そですか...${addFurigana('残念', 'ざんねん')}ですね, じゃ, 明日どうですか`
                            },
                            {
                                actor: 'ポロー',
                                speech: `明日は大丈夫です`
                            }
                        ],
                        explanation: `なければなりません can also be used as response to questions, is often used as a reason for refusal to invitations`
                    },
                    {
                        japanese: `あ, もう 5時まだ. ごはん, つからなきゃ`,
                        explanation: `The informal form of なければなりません is なきゃ, making the expression way easier`
                    }
                ]
            }
        ]
    },
    {
        number: '27',
        title: 'どうしたんですか',
        background: '',
        description: 'In this chapter we learn how to ask for more informations about something in a more proper way using the ~んです, how to ask for a suggestion or help and how to indicate that you are doing two things at the same time',
        grammar: [
            {
                title: 'どうしたんですか',
                summary: 'んです is used to ask or to give a explanation about a certain situation, んです is only used when both parts of the conversation share a ceratin information',
                examples: [
                    {
                        dialog: true,
                        actors: ['A', 'B'],
                        conversation: [
                            {
                                actor: 'A',
                                speech: '学校を休みんだんですか'
                            },
                            {
                                actor: 'B',
                                speech: `はい,${addFurigana('風邪', 'かぜ')}を引いたんです`
                            }
                        ],
                        explanation: `Knowning or hearing that B was not in school, A used んです to request futher information`
                    },
                    {
                        dialog: true,
                        actors: ['A', 'B1', 'B2', 'B3', 'B4'],
                        conversation: [
                            {
                                actor: 'A',
                                speech: '試合はいつ始めたんですか'
                            },
                            {
                                actor: 'B1',
                                speech: `8時30分です`
                            },
                            {
                                actor: 'B2',
                                speech: `8時30分に始めます`
                            },
                            {
                                actor: 'B3',
                                speech: `えと...8時30分に始まると思います`
                            },
                            {
                                actor: 'B4',
                                speech: `そうね...8時30分の前に始めなければなりません`
                            }
                        ],
                        explanation: `Note that when a simple fact is used as response, んです is not used because is not a explanation
                        but a statement`
                    },
                    {
                        japanese: `どこ行くの?`,
                        english: `Where are you going?`,
                        explanation: `The informal form of んですか is の the question particle is dropped in favor of the の
                        with the same rising intonation`
                    }
                ]
            },
            {
                title: 'んですが...',
                summary: 'You can use んですが to explain a situation before requesting advice or help',
                examples: [
                    {
                        japanese: `強いインフルエンザが引いたんですが, 良くて近い病院を教えてください`,
                        english: `I have a strong flu, would you tell me a good and close hospital?`,
                        explanation: `んですが can be used with ${addFurigana('動詞', 'どうし')} in ${addFurigana('辞書形', 'じしょけい')} or past form`
                    },
                    {
                        japanese: `雨が降って${addFurigana('傘', 'かさ')}がもってないですが...`,
                        english: `It's raining and I didn't bring a umbrella...`,
                        explanation: `If the second sentece can be inferred from the first it is often omitted`
                    }
                ]
            },
            {
                title: 'それはしながら...',
                summary: 'ながら is a pattern that is used to express that the subject does two actions at the same time',
                examples: [
                    {
                        japanese: `アニメを見ながらご飯を食べます`,
                        english: `I eat lunch while watching anime`,
                        explanation: `ながら substitute the ます of the ${addFurigana('動詞', 'どうし')}, then followed by the other action`
                    }
                ]
            },
            {
                title: 'どうしたらいですか',
                summary: `In japanese there's several forms of requesting adivice and giving it, all with the traditional indirect japanese approach`,
                examples: [
                    {
                        japanese: `あしたの${addFurigana('日付', 'ひづけ')}は何をもってきたらいいですか`,
                        english: `What should I bring to tommorow's date?`,
                        explanation: `To ask for a suggetions to a situation you would use an ${addFurigana('他動詞', 'たどうし')} 
                        plus the らいいですか pattern`
                    },
                    {
                        japanese: `${addFurigana('夏', 'なつ')}休みはハワイへ行ったらどうですか`,
                        english: `How about going to Hawaii during summer vacation?`,
                        explanation: `To make a suggestion you should use an ${addFurigana('他動詞', 'たどうし')} plus the らどうですか pattern`
                    },
                    {
                        japanese: `9時にミーティングを${addFurigana('予定', 'よてい')}したらいかがですか`,
                        english: `How about scheduling the meething at 9 o'clock`,
                        explanation: `To make a suggestion to your superior tough, you need to use the らいかがですか pattern instead`
                    },
                    {
                        japanese: `デービッドはあのレストランの食べ物${addFurigana('価格', 'かかく')}高いと思っています`,
                        english: `David thinks that the food of that restaurant is expesive`,
                        explanation: `と思っています can be used to express what a third person thinks about something`
                    },
                    {
                        japanese: `大学の終わりに${addFurigana('開発元', 'かいはつもと')}になりたいと思っています`,
                        english: `I want to be a developer at the end of college`,
                        explanation: `と思っています can also be used to express the speaker's intention of doing something, otherwise
                        if the speaker wants to state his opinion or conjecture, he should use the normal と思います`
                    },
                    {
                        japanese: `${addFurigana('羨', 'うらや')}ましいなあ`,
                        english: `I envy you`,
                        explanation: `なあ is used to express the speaker's feeling or sense of admiration for someone, the plain
                        form is used before the なあ, this is exclusive for casual conversations and should not be used when
                        talking to a superior`
                    }
                ]
            }
        ]
    }
]

export default daichi_chapters;