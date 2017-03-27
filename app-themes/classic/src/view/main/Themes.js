/**
 * This view is an example list of theme.
 */
Ext.define('AppThemes.view.main.Themes', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainthemes',

    requires: [
        'AppThemes.store.Themes',
        'Ext.grid.feature.Grouping'
    ],

    title: 'Themes',

    store: {
        type: 'themes'
    },

    viewConfig: {
        getRowClass: function(record, rowIndex, rowParams, store){
            return record.get('profile') == Ext.manifest.profile ? "x-item-current" : "";
        }
    },
	
    columns: [
        { text: 'Name',  dataIndex: 'profile', flex: 1 },
        { text: 'Toolkit', dataIndex: 'current' },
        { text: 'Theme', dataIndex: 'theme', flex: 3 }
    ],

    features: [{
        ftype: 'grouping',
        startCollapsed: false,
        groupHeaderTpl: '{columnName}: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})'
    }],

    listeners: {
        itemDblClick: 'onThemeItemDblClick'
    }
});
