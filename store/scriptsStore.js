import { create } from 'zustand';
import { loadScripts,saveScripts } from '../lib/storage/scriptStorage';

export const useScriptStore = create((set,get)=>({
    scripts: [],

    load: async()=> {
        const storedScripts= await loadScripts();
        set({scripts:storedScripts})
    },

    createScript: async(title, content)=>{
        const currentScripts= get().scripts;
        const newScript = {
          id: Date.now().toString(),
          title,
          content,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };
        const updatedScripts = [...currentScripts, newScript];

        set({ scripts: updatedScripts });

        await saveScripts(updatedScripts);
    },
    updateScript: async (id, newTitle, newContent) => {
        const currentScripts = get().scripts;

        const updatedScripts = currentScripts.map(script =>
            script.id === id
            ? {
                ...script,
                title: newTitle,
                content: newContent,
                updatedAt: Date.now(),
                }
                : script
        );

        set({ scripts: updatedScripts });

        await saveScripts(updatedScripts);
    },
    deleteScript: async(id) =>{
        const currentScripts= get().scripts;

        const updatedScripts= currentScripts.filter(script=> script.id!==id);

        set({scripts:updatedScripts});

        await saveScripts(updatedScripts);
    }

}));

