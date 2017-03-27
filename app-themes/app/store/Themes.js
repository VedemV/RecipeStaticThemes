Ext.define('AppThemes.store.Themes', {
    extend: 'Ext.data.Store',

    alias: 'store.themes',

    fields: [
        'profile',
		'toolkit',
		'theme'
    ],
	
    groupField: 'toolkit',
    sorters: ['toolkit','name'],

    data: { items: [

        { profile: 'classic', toolkit: 'classic', theme: 'theme-classic' },
        { profile: 'aria', toolkit: 'classic', theme: 'theme-aria' },
        { profile: 'gray', toolkit: 'classic', theme: 'theme-gray' },
        { profile: 'neptune', toolkit: 'classic', theme: 'theme-neptune' },
        { profile: 'neptune-touch', toolkit: 'classic', theme: 'theme-neptune-touch' },
        { profile: 'crisp', toolkit: 'classic', theme: 'theme-crisp' },
        { profile: 'crisp-touch', toolkit: 'classic', theme: 'theme-crisp-touch' },
        { profile: 'triton', toolkit: 'classic', theme: 'theme-triton' },
        { profile: 'modern-neptune', toolkit: 'modern', theme: 'theme-neptune' },
        { profile: 'modern-triton', toolkit: 'modern', theme: 'theme-triton' },
        { profile: 'modern-material', toolkit: 'modern', theme: 'theme-material' },
        { profile: 'ios', toolkit: 'modern', theme: 'theme-ios' },
        { profile: 'blackbery', toolkit: 'modern', theme: 'theme-blackbery' },
        { profile: 'cupertino', toolkit: 'modern', theme: 'theme-cupertino' },
        { profile: 'mountainview', toolkit: 'modern', theme: 'theme-mountainview' },
        { profile: 'windows', toolkit: 'modern', theme: 'theme-windows' }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
