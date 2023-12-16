import OpenAI from 'openai';
import {OPEN_AI_GPTKEY} from './constants'
const openai = new OpenAI({
  apiKey: OPEN_AI_GPTKEY,
  dangerouslyAllowBrowser:true, // This is the default and can be omitted
});

export default openai;