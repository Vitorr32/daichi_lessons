import { addFurigana } from "../../utils/functions";

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
        number: '26',
        title: 'その時',
        sub_title: 'Sono toki',
        background: 'https://i.imgur.com/yCtOUWW.jpg',
        description: 'Using とき we can refer to activities realized on certain times or conditions, like childhood or vacation',
        grammar: [
            {
                title: 'その時',
                sub_title: 'Sonotoki',
                summary: `You can describe a action that happens in a certain condition using とき at the end of the conditional situation.
                The second sentece then describes a action which happens on the first sentence conditional situation, it can be pretty much anything.
            Careful tough, there's some rules to how the ending of the conditional situation connects with the とき, check the examples!`,
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
                    }
                ]
            }
        ]
    }
]

export default daichi_chapters;