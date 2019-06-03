import { addFurigana } from "../../utils/functions";
import { EXTRA_CONTENT_TABLE_TYPE } from "../../utils/constants";

const daichi_chapters = [
    {
        number: '1',
        title: '自己紹介',
        sub_title: 'Jikoshoukai',
        background: 'https://i.imgur.com/GuG7avn.jpg',
        description: 'In this chapter you learn how to introduce yourself to another person',
        content: [
            {
                title: 'わたしは...',
                description: 'Presenting yourself is the primary step to a conversation, you can either present yourself by name, role or nationality, all starts with わたしは',
                example: [
                    {
                        japanese: '私はリンです',
                        romanji: 'Watashi wa rin desu',
                        english: 'I am Rin'
                    },
                    {
                        japanese: '私は学生です',
                        romanji: 'Watashi wa gakusei desu',
                        english: 'I am a student'
                    }
                ]
            }
        ]
    },
    {
        number: '25',
        title: 'その時は…',
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
                        type: EXTRA_CONTENT_TABLE_TYPE,
                        compositedTable: true,
                        title: 'Quick Hint',
                        description: `To make things easier to understand, we made the following table to guide you in the forms that the ${addFurigana('動詞', 'どうし')} can take and what it implies`,
                        headers: [addFurigana('辞書形', 'じしょけい'), addFurigana('他動詞', 'たどうし')],
                        rowHeaders: [addFurigana('辞書形', 'じしょけい'), addFurigana('他動詞', 'たどうし')],
                        compositedTableHeaders: ['First sentence', 'Second sentence'],
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
            }
        ]
    },
    {
        number: '27',
        title: 'その時は…',
    }
]

export default daichi_chapters;