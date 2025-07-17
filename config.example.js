// 1. PASTE YOUR API KEYS HERE
const API_KEYS = {
    google: "PASTE_YOUR_GOOGLE_API_KEY_HERE",
    openai: "PASTE_YOUR_OPENAI_API_KEY_HERE",
    anthropic: "PASTE_YOUR_ANTHROPIC_API_KEY_HERE",
    'xai-grok4': "PASTE_YOUR_XAI_GROK4_API_KEY_HERE",
    'xai-grok3-mini': "PASTE_YOUR_XAI_GROK3_MINI_API_KEY_HERE"
};

// 2. Add or remove bots here. The dropdowns will update automatically.
const BOT_CONFIG = {
    'gemini-flash': {
        displayName: 'Gemini 2.5 Flash Lite',
        keyName: 'google',
        api: 'gemini',
        model: 'gemini-2.5-flash-lite-preview-06-17'
    },
    'gemini-pro': {
        displayName: 'Gemini 2.5 Pro',
        keyName: 'google',
        api: 'gemini',
        model: 'gemini-2.5-pro'
    },
    'openai-gpt4o': {
        displayName: 'ChatGPT 4o',
        keyName: 'openai',
        api: 'openai_compatible',
        model: 'gpt-4o',
        url: 'https://api.openai.com/v1/chat/completions'
    },
    'openai-gpt4o-mini': {
        displayName: 'ChatGPT 4o Mini',
        keyName: 'openai',
        api: 'openai_compatible',
        model: 'gpt-4o-mini',
        url: 'https://api.openai.com/v1/chat/completions'
    },
    'xai-grok3-mini': {
        displayName: 'Grok 3 Mini',
        keyName: 'xai-grok3-mini',
        api: 'openai_compatible',
        model: 'grok-3-mini',
        url: 'https://api.x.ai/v1/chat/completions'
    },
    'xai-grok4': {
        displayName: 'Grok4',
        keyName: 'xai-grok4',
        api: 'openai_compatible',
        model: 'grok-4-0709',
        url: 'https://api.x.ai/v1/chat/completions'
    },
    'claude-sonnet': {
        displayName: 'Claude 3.5 Sonnet',
        keyName: 'anthropic',
        api: 'anthropic',
        model: 'claude-3-5-sonnet-20240620'
    }
};
