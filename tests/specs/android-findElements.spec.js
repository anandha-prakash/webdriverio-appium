describe('Android finding elements', ()=>{
    it('Find Element by accessibility id', async ()=>{
        const appOption = await $('~App');
        await appOption.click();

        const actionBar = await $('~Action Bar');

        await expect(actionBar).toBeExisting();
    });
});