// ═══════════════════════════════════════════════════
//  KASH — i18n.js  (ES / EN)
// ═══════════════════════════════════════════════════

const TRADUCCIONES = {
  es: {
    // NAVBAR
    nav_nuevo:       'Nuevo gasto',
    nav_resumen:     'Resumen',
    nav_anteriores:  'Meses anteriores',
    nav_presupuestos:'Presupuestos',
    nav_reporte:     'Reporte',
    nav_graficos:    'Gráficos',
    nav_salir:       'Salir',

    // BOTTOM NAV
    bnav_nuevo:       'Nuevo',
    bnav_resumen:     'Resumen',
    bnav_historial:   'Historial',
    bnav_presupuesto: 'Presupuesto',
    bnav_reporte:     'Reporte',
    bnav_graficos:    'Gráficos',

    // AUTH
    auth_bienvenido:    'Bienvenido de nuevo',
    auth_sub_login:     'Ingresa a tu cuenta para continuar',
    auth_correo:        'Correo electrónico',
    auth_correo_ph:     'tucorreo@ejemplo.com',
    auth_contrasena:    'Contraseña',
    auth_contrasena_ph: '••••••••',
    auth_btn_login:     'Iniciar sesión',
    auth_no_cuenta:     '¿No tienes cuenta?',
    auth_registrate:    'Regístrate',
    auth_crear_cuenta:  'Crear cuenta',
    auth_sub_register:  'Empieza a registrar tus gastos',
    auth_nombre:        'Nombre completo',
    auth_nombre_ph:     'Tu nombre',
    auth_minpass:       'Mínimo 6 caracteres',
    auth_btn_register:  'Crear cuenta',
    auth_ya_cuenta:     '¿Ya tienes cuenta?',
    auth_inicia:        'Inicia sesión',

    // SECCIÓN NUEVO GASTO
    nuevo_titulo:    'Registrar gasto',
    nuevo_sub:       'Añade un nuevo movimiento a tu registro',
    label_fecha:     'Fecha',
    label_hora:      'Hora',
    label_monto:     'Monto (COP)',
    label_categoria: 'Categoría',
    label_cual_cat:  '¿Cuál categoría?',
    label_cual_ph:   'Ej: Salud, Mascota, Hogar…',
    label_como_pago: '¿Cómo pagaste?',
    label_sin_esp:   'Sin especificar',
    label_descripcion:'Descripción',
    label_desc_ph:   '¿En qué gastaste?',
    label_opcional:  '(opcional)',
    btn_guardar:     'Guardar gasto',
    btn_limpiar:     'Limpiar',
    btn_recurrentes: '🔁 Gestionar gastos recurrentes',

    // CATEGORÍAS
    cat_seleccionar:      'Seleccionar…',
    cat_comida:           'Comida',
    cat_transporte:       'Transporte',
    cat_entretenimiento:  'Entretenimiento',
    cat_ropa:             'Ropa',
    cat_otros:            'Otros',

    // SECCIÓN RESUMEN
    resumen_sub:     'Resumen del mes actual',
    resumen_total:   'Total del mes',
    resumen_buscar:  'Buscar por descripción…',
    resumen_todas_cats: 'Todas las categorías',
    resumen_vacio:   'No hay registros este mes',
    pendientes_titulo: '🔔 Pendientes este mes',

    // SECCIÓN ANTERIORES
    anteriores_titulo: 'Meses anteriores',
    anteriores_sub:    'Historial de todos tus gastos',
    btn_comparar:      '⇄ Comparar meses',
    anteriores_vacio:  'No hay registros anteriores',
    btn_volver:        '← Volver',
    comparar_titulo:   'Comparar meses',
    comparar_mes_a:    'Mes A',
    comparar_mes_b:    'Mes B',
    comparar_vs:       'VS',
    btn_comparar_cargar: 'Comparar',
    comp_dif:          'Dif.',

    // SECCIÓN REPORTE
    reporte_titulo:  'Descargar reporte',
    reporte_sub:     'Exporta tus gastos en PDF o CSV',
    label_anio:      'Año',
    label_mes:       'Mes',
    btn_pdf:         '⬇ Descargar PDF',
    btn_csv:         '⬇ Descargar CSV',

    // SECCIÓN GRÁFICOS
    graficos_titulo: 'Distribución de gastos',
    graficos_sub:    'Visualiza tus hábitos de gasto',
    btn_ver_graf:    'Ver gráficos',
    graf_categoria:  'Por categoría',
    graf_diario:     'Gasto diario',
    graf_evolucion:  'Evolución mensual',

    // SECCIÓN PRESUPUESTOS
    pres_titulo:     'Presupuestos',
    pres_sub:        'Controla cuánto gastas por categoría cada mes',
    btn_ver_pres:    'Ver',
    pres_nuevo:      '+ Nuevo presupuesto',
    label_limite:    'Límite mensual (COP)',
    btn_guardar_pres:'Guardar presupuesto',
    pres_vacio:      'No hay presupuestos para este mes.\nCrea uno abajo.',
    pres_excedido:   '⚠ Excedido',

    // MODAL EDITAR GASTO
    edit_titulo:     'Editar gasto',
    btn_actualizar:  'Actualizar',
    btn_cancelar:    'Cancelar',

    // MODAL ELIMINAR
    del_titulo_gasto:'¿Eliminar gasto?',
    del_texto:       'Esta acción no se puede deshacer.',
    btn_eliminar:    'Eliminar',

    // MODAL PDF
    pdf_titulo:      'Cifrar PDF',
    pdf_sub:         'Ingresa tu contraseña para cifrar el PDF. La necesitarás para abrirlo.',
    pdf_label_pass:  'Contraseña',
    pdf_pass_ph:     'Tu contraseña',
    btn_generar_pdf: 'Generar PDF',

    // MODAL DETALLE GASTO
    detail_titulo:   'Detalle del gasto',
    detail_cat:      'Categoría',
    detail_desc:     'Descripción',
    detail_monto:    'Monto',
    detail_pagado:   'Pagado con',
    detail_fecha:    'Fecha',
    detail_hora:     'Hora',

    // BILLETERAS
    wallet_titulo:        'Mis billeteras',
    wallet_sub:           'Toca una para ver el saldo',
    wallet_nueva:         '＋ Nueva billtera',
    wallet_saldo:         'Saldo disponible',
    wallet_recargar:      '+ Recargar',
    wallet_restar:        '− Restar',
    wallet_agregar:       'Agregar',
    wallet_establecer:    'Establecer',
    wallet_transferir:    '⇄ Transferir',
    wallet_eliminar:      'Eliminar billtera',
    wallet_vacia:         'No tienes billeteras',
    nueva_wallet_titulo:  'Nueva billtera',
    nueva_wallet_emoji:   'Emoji',
    nueva_wallet_nombre:  'Nombre',
    nueva_wallet_nombre_ph: 'Ej: Nequi, Bancolombia, Efectivo…',
    nueva_wallet_saldo:   'Saldo inicial',
    btn_crear_billtera:   'Crear billtera',
    wallet_no_disponible: 'ℹ️ No disponible para fechas anteriores',

    // MODAL TRANSFERIR
    transferir_titulo:  'Transferir saldo',
    transferir_desde:   'Desde',
    transferir_hacia:   'Transferir a',
    transferir_monto:   'Monto (COP)',
    btn_transferir:     'Transferir',

    // MODAL EDITAR PRESUPUESTO
    edit_pres_titulo: 'Editar presupuesto',
    edit_pres_label:  'Nuevo límite mensual (COP)',
    btn_guardar_edit: 'Guardar',

    // RECURRENTES
    rec_titulo:       'Gastos recurrentes',
    rec_nuevo:        '+ Nuevo recurrente',
    rec_nombre_label: 'Nombre',
    rec_nombre_ph:    'Ej: Arriendo, Netflix, Gym…',
    rec_monto_label:  'Monto (COP)',
    rec_dia_label:    'Día del mes',
    rec_dia_ph:       'Ej: 5',
    rec_cat_label:    'Categoría',
    rec_bill_label:   '¿Cómo pagas?',
    rec_desc_label:   'Descripción',
    rec_desc_ph:      'Detalles del gasto…',
    btn_guardar_rec:  'Guardar recurrente',
    rec_vacio:        'No tienes gastos recurrentes',
    btn_editar:       'Editar',
    btn_editar_rec:   'Actualizar recurrente',

    // MODAL REGISTRAR RECURRENTE
    rr_titulo:        'Registrar gasto',
    btn_rr_guardar:   'Guardar gasto',
    btn_rr_cancelar:  'Cancelar',

    // BANNER RECURRENTES
    banner_pendientes: 'Tienes gastos recurrentes pendientes',
    banner_ver:        'Ver pendientes',
    btn_rp_registrar:  'Registrar ahora',

    // PERFIL
    perfil_titulo:       'Mi perfil',
    perfil_nombre_label: 'Nombre',
    perfil_nombre_ph:    'Tu nombre completo',
    perfil_correo_label: 'Correo',
    perfil_pass_titulo:  'Cambiar contraseña',
    perfil_pass_opcional:'(opcional)',
    perfil_pass_actual:  'Contraseña actual',
    perfil_pass_actual_ph:'Tu contraseña actual',
    perfil_pass_nueva:   'Nueva contraseña',
    perfil_pass_nueva_ph:'Mínimo 6 caracteres',
    btn_perfil_guardar:  'Guardar',
    btn_perfil_cancelar: 'Cancelar',
    perfil_actividad:    '🕐 Ver mi actividad',
    perfil_success:      '✓ Perfil actualizado',
    perfil_idioma:       'Idioma',

    // ACTIVIDAD
    actividad_titulo: 'Mi actividad',
    actividad_sub:    'Últimos 30 días',
    actividad_vacia:  'Sin actividad reciente',

    // ERRORES
    err_campos:        'Completa todos los campos',
    err_pass_corta:    'La contraseña debe tener al menos 6 caracteres',
    err_fecha_hora_monto_cat: 'Fecha, hora, monto y categoría son obligatorios',
    err_todos_campos:  'Todos los campos principales son obligatorios',
    err_cat_limite:    'Selecciona una categoría e ingresa un límite',
    err_nombre_req:    'El nombre es requerido',
    err_nombre_correo: 'El nombre y el correo son obligatorios',
    err_pass_actual:   'Debes ingresar tu contraseña actual para cambiarla',
    err_pass_nueva:    'Ingresa la nueva contraseña',
    err_pass_incorrecta: 'Contraseña incorrecta',
    err_ingresa_pass:  'Ingresa una contraseña',
    err_saldo_insuf:   'Saldo insuficiente',
    err_destino:       'Selecciona una billtera de destino',
    err_monto_valido:  'Ingresa un monto válido',
    err_rec_campos:    'Nombre, monto, día y categoría son obligatorios',
    err_rec_dia:       'El día debe estar entre 1 y 31',
    err_rec_campos_ob: 'Completa todos los campos obligatorios',
    err_no_period:     'No hay registros para el período seleccionado.',
    err_no_period_pdf: 'No hay registros para el período.',

    // ESTADOS VACÍOS / LOADING
    loading:           'Cargando…',
    no_registros:      'No hay registros',
    ingresando:        'Ingresando…',
    creando_cuenta:    'Creando cuenta…',
    guardando:         'Guardando…',
    generando:         'Generando…',
    cargando:          'Cargando…',
    transfiriendo:     'Transfiriendo…',
    creando:           'Creando…',
    verificando:       'Verificando…',

    // PDF
    pdf_reporte:       'REPORTE MENSUAL DE GASTOS',
    pdf_total_mes:     'TOTAL DEL MES',
    pdf_resumen_cat:   'RESUMEN POR CATEGORÍA',
    pdf_generado:      'Generado el',
    pdf_pagina:        'Página',
    pdf_de:            'de',

    // NOTIFICACIONES
    notif_otra_sesion_movil: 'Tu cuenta también está abierta en otro móvil.',
    notif_otra_sesion_pc:    'Tu cuenta también está abierta en otro computador.',
    notif_transferencia:     '✓ Transferencia exitosa de',
  },

  en: {
    // NAVBAR
    nav_nuevo:       'New expense',
    nav_resumen:     'Summary',
    nav_anteriores:  'Previous months',
    nav_presupuestos:'Budgets',
    nav_reporte:     'Report',
    nav_graficos:    'Charts',
    nav_salir:       'Sign out',

    // BOTTOM NAV
    bnav_nuevo:       'New',
    bnav_resumen:     'Summary',
    bnav_historial:   'History',
    bnav_presupuesto: 'Budget',
    bnav_reporte:     'Report',
    bnav_graficos:    'Charts',

    // AUTH
    auth_bienvenido:    'Welcome back',
    auth_sub_login:     'Sign in to your account to continue',
    auth_correo:        'Email address',
    auth_correo_ph:     'your@email.com',
    auth_contrasena:    'Password',
    auth_contrasena_ph: '••••••••',
    auth_btn_login:     'Sign in',
    auth_no_cuenta:     "Don't have an account?",
    auth_registrate:    'Sign up',
    auth_crear_cuenta:  'Create account',
    auth_sub_register:  'Start tracking your expenses',
    auth_nombre:        'Full name',
    auth_nombre_ph:     'Your name',
    auth_minpass:       'At least 6 characters',
    auth_btn_register:  'Create account',
    auth_ya_cuenta:     'Already have an account?',
    auth_inicia:        'Sign in',

    // SECCIÓN NUEVO GASTO
    nuevo_titulo:    'New expense',
    nuevo_sub:       'Add a new transaction to your record',
    label_fecha:     'Date',
    label_hora:      'Time',
    label_monto:     'Amount (COP)',
    label_categoria: 'Category',
    label_cual_cat:  'Which category?',
    label_cual_ph:   'e.g. Health, Pet, Home…',
    label_como_pago: 'How did you pay?',
    label_sin_esp:   'Not specified',
    label_descripcion:'Description',
    label_desc_ph:   'What did you spend on?',
    label_opcional:  '(optional)',
    btn_guardar:     'Save expense',
    btn_limpiar:     'Clear',
    btn_recurrentes: '🔁 Manage recurring expenses',

    // CATEGORÍAS
    cat_seleccionar:      'Select…',
    cat_comida:           'Food',
    cat_transporte:       'Transport',
    cat_entretenimiento:  'Entertainment',
    cat_ropa:             'Clothing',
    cat_otros:            'Other',

    // SECCIÓN RESUMEN
    resumen_sub:     'Current month summary',
    resumen_total:   'Month total',
    resumen_buscar:  'Search by description…',
    resumen_todas_cats: 'All categories',
    resumen_vacio:   'No records this month',
    pendientes_titulo: '🔔 Pending this month',

    // SECCIÓN ANTERIORES
    anteriores_titulo: 'Previous months',
    anteriores_sub:    'All your expense history',
    btn_comparar:      '⇄ Compare months',
    anteriores_vacio:  'No previous records',
    btn_volver:        '← Back',
    comparar_titulo:   'Compare months',
    comparar_mes_a:    'Month A',
    comparar_mes_b:    'Month B',
    comparar_vs:       'VS',
    btn_comparar_cargar: 'Compare',
    comp_dif:          'Diff.',

    // SECCIÓN REPORTE
    reporte_titulo:  'Download report',
    reporte_sub:     'Export your expenses as PDF or CSV',
    label_anio:      'Year',
    label_mes:       'Month',
    btn_pdf:         '⬇ Download PDF',
    btn_csv:         '⬇ Download CSV',

    // SECCIÓN GRÁFICOS
    graficos_titulo: 'Expense breakdown',
    graficos_sub:    'Visualize your spending habits',
    btn_ver_graf:    'View charts',
    graf_categoria:  'By category',
    graf_diario:     'Daily spending',
    graf_evolucion:  'Monthly trend',

    // SECCIÓN PRESUPUESTOS
    pres_titulo:     'Budgets',
    pres_sub:        'Control how much you spend per category each month',
    btn_ver_pres:    'View',
    pres_nuevo:      '+ New budget',
    label_limite:    'Monthly limit (COP)',
    btn_guardar_pres:'Save budget',
    pres_vacio:      'No budgets for this month.\nCreate one below.',
    pres_excedido:   '⚠ Over budget',

    // MODAL EDITAR GASTO
    edit_titulo:     'Edit expense',
    btn_actualizar:  'Update',
    btn_cancelar:    'Cancel',

    // MODAL ELIMINAR
    del_titulo_gasto:'Delete expense?',
    del_texto:       'This action cannot be undone.',
    btn_eliminar:    'Delete',

    // MODAL PDF
    pdf_titulo:      'Encrypt PDF',
    pdf_sub:         'Enter your password to encrypt the PDF. You will need it to open it.',
    pdf_label_pass:  'Password',
    pdf_pass_ph:     'Your password',
    btn_generar_pdf: 'Generate PDF',

    // MODAL DETALLE GASTO
    detail_titulo:   'Expense detail',
    detail_cat:      'Category',
    detail_desc:     'Description',
    detail_monto:    'Amount',
    detail_pagado:   'Paid with',
    detail_fecha:    'Date',
    detail_hora:     'Time',

    // BILLETERAS
    wallet_titulo:        'My wallets',
    wallet_sub:           'Tap one to see the balance',
    wallet_nueva:         '＋ New wallet',
    wallet_saldo:         'Available balance',
    wallet_recargar:      '+ Add funds',
    wallet_restar:        '− Deduct',
    wallet_agregar:       'Add',
    wallet_establecer:    'Set',
    wallet_transferir:    '⇄ Transfer',
    wallet_eliminar:      'Delete wallet',
    wallet_vacia:         "You don't have wallets",
    nueva_wallet_titulo:  'New wallet',
    nueva_wallet_emoji:   'Emoji',
    nueva_wallet_nombre:  'Name',
    nueva_wallet_nombre_ph: 'e.g. Checking, Savings, Cash…',
    nueva_wallet_saldo:   'Initial balance',
    btn_crear_billtera:   'Create wallet',
    wallet_no_disponible: 'ℹ️ Not available for past dates',

    // MODAL TRANSFERIR
    transferir_titulo:  'Transfer funds',
    transferir_desde:   'From',
    transferir_hacia:   'Transfer to',
    transferir_monto:   'Amount (COP)',
    btn_transferir:     'Transfer',

    // MODAL EDITAR PRESUPUESTO
    edit_pres_titulo: 'Edit budget',
    edit_pres_label:  'New monthly limit (COP)',
    btn_guardar_edit: 'Save',

    // RECURRENTES
    rec_titulo:       'Recurring expenses',
    rec_nuevo:        '+ New recurring',
    rec_nombre_label: 'Name',
    rec_nombre_ph:    'e.g. Rent, Netflix, Gym…',
    rec_monto_label:  'Amount (COP)',
    rec_dia_label:    'Day of month',
    rec_dia_ph:       'e.g. 5',
    rec_cat_label:    'Category',
    rec_bill_label:   'How do you pay?',
    rec_desc_label:   'Description',
    rec_desc_ph:      'Expense details…',
    btn_guardar_rec:  'Save recurring',
    rec_vacio:        "You don't have recurring expenses",
    btn_editar:       'Edit',
    btn_editar_rec:   'Update recurring',

    // MODAL REGISTRAR RECURRENTE
    rr_titulo:        'Record expense',
    btn_rr_guardar:   'Save expense',
    btn_rr_cancelar:  'Cancel',

    // BANNER RECURRENTES
    banner_pendientes: 'You have pending recurring expenses',
    banner_ver:        'View pending',
    btn_rp_registrar:  'Record now',

    // PERFIL
    perfil_titulo:       'My profile',
    perfil_nombre_label: 'Name',
    perfil_nombre_ph:    'Your full name',
    perfil_correo_label: 'Email',
    perfil_pass_titulo:  'Change password',
    perfil_pass_opcional:'(optional)',
    perfil_pass_actual:  'Current password',
    perfil_pass_actual_ph:'Your current password',
    perfil_pass_nueva:   'New password',
    perfil_pass_nueva_ph:'At least 6 characters',
    btn_perfil_guardar:  'Save',
    btn_perfil_cancelar: 'Cancel',
    perfil_actividad:    '🕐 View my activity',
    perfil_success:      '✓ Profile updated',
    perfil_idioma:       'Language',

    // ACTIVIDAD
    actividad_titulo: 'My activity',
    actividad_sub:    'Last 30 days',
    actividad_vacia:  'No recent activity',

    // ERRORES
    err_campos:        'Please fill in all fields',
    err_pass_corta:    'Password must be at least 6 characters',
    err_fecha_hora_monto_cat: 'Date, time, amount and category are required',
    err_todos_campos:  'All main fields are required',
    err_cat_limite:    'Select a category and enter a limit',
    err_nombre_req:    'Name is required',
    err_nombre_correo: 'Name and email are required',
    err_pass_actual:   'You must enter your current password to change it',
    err_pass_nueva:    'Enter the new password',
    err_pass_incorrecta: 'Incorrect password',
    err_ingresa_pass:  'Enter a password',
    err_saldo_insuf:   'Insufficient balance',
    err_destino:       'Select a destination wallet',
    err_monto_valido:  'Enter a valid amount',
    err_rec_campos:    'Name, amount, day and category are required',
    err_rec_dia:       'Day must be between 1 and 31',
    err_rec_campos_ob: 'Please fill in all required fields',
    err_no_period:     'No records for the selected period.',
    err_no_period_pdf: 'No records for the period.',

    // ESTADOS VACÍOS / LOADING
    loading:           'Loading…',
    no_registros:      'No records',
    ingresando:        'Signing in…',
    creando_cuenta:    'Creating account…',
    guardando:         'Saving…',
    generando:         'Generating…',
    cargando:          'Loading…',
    transfiriendo:     'Transferring…',
    creando:           'Creating…',
    verificando:       'Verifying…',

    // PDF
    pdf_reporte:       'MONTHLY EXPENSE REPORT',
    pdf_total_mes:     'MONTH TOTAL',
    pdf_resumen_cat:   'SUMMARY BY CATEGORY',
    pdf_generado:      'Generated on',
    pdf_pagina:        'Page',
    pdf_de:            'of',

    // NOTIFICACIONES
    notif_otra_sesion_movil: 'Your account is also open on another mobile.',
    notif_otra_sesion_pc:    'Your account is also open on another computer.',
    notif_transferencia:     '✓ Successful transfer of',
  }
};

let idiomaActual = localStorage.getItem('gd_idioma') || 'es';

function t(key) {
  return TRADUCCIONES[idiomaActual]?.[key] || TRADUCCIONES['es'][key] || key;
}

function aplicarIdioma(lang) {
  idiomaActual = lang;
  localStorage.setItem('gd_idioma', lang);

  // ── AUTH ──────────────────────────────────────────
  setText('panel-login h2',          t('auth_bienvenido'));
  setText('panel-login .auth-sub',   t('auth_sub_login'));
  setLabel('login-email',            t('auth_correo'));
  setPlaceholder('login-email',      t('auth_correo_ph'));
  setLabel('login-pass',             t('auth_contrasena'));
  setPlaceholder('login-pass',       t('auth_contrasena_ph'));
  setText('btn-login',               t('auth_btn_login'));
  setLabel('reg-nombre',             t('auth_nombre'));
  setPlaceholder('reg-nombre',       t('auth_nombre_ph'));
  setLabel('reg-email',              t('auth_correo'));
  setPlaceholder('reg-email',        t('auth_correo_ph'));
  setPlaceholder('reg-pass',         t('auth_minpass'));
  setText('btn-register',            t('auth_btn_register'));
  setText('panel-register h2',       t('auth_crear_cuenta'));
  setText('panel-register .auth-sub',t('auth_sub_register'));

  // ── NAVBAR ────────────────────────────────────────
  setNavLink('nuevo',        t('nav_nuevo'));
  setNavLink('resumen',      t('nav_resumen'));
  setNavLink('anteriores',   t('nav_anteriores'));
  setNavLink('presupuestos', t('nav_presupuestos'));
  setNavLink('reporte',      t('nav_reporte'));
  setNavLink('graficos',     t('nav_graficos'));
  setText('btn-logout',      t('nav_salir'));

  // ── BOTTOM NAV ────────────────────────────────────
  setBnavLabel('nuevo',        t('bnav_nuevo'));
  setBnavLabel('resumen',      t('bnav_resumen'));
  setBnavLabel('anteriores',   t('bnav_historial'));
  setBnavLabel('presupuestos', t('bnav_presupuesto'));
  setBnavLabel('reporte',      t('bnav_reporte'));
  setBnavLabel('graficos',     t('bnav_graficos'));

  // ── SECCIÓN NUEVO ─────────────────────────────────
  setTextQ('#section-nuevo .section-header h1',  t('nuevo_titulo'));
  setTextQ('#section-nuevo .section-header p',   t('nuevo_sub'));
  setPlaceholder('f-descripcion', t('label_desc_ph'));
  setPlaceholder('f-categoria-custom', t('label_cual_ph'));
  setText('btn-guardar',  t('btn_guardar'));
  setText('btn-limpiar',  t('btn_limpiar'));
  setText('btn-gestionar-recurrentes', t('btn_recurrentes'));
  actualizarOpcionesCategorias('f-categoria');

  // ── SECCIÓN RESUMEN ───────────────────────────────
  setTextQ('#section-resumen .section-header p', t('resumen_sub'));
  setTextQ('.badge-label',   t('resumen_total'));
  setPlaceholder('buscar-input', t('resumen_buscar'));
  actualizarOpcionesCategorias('filtro-categoria', true);

  // ── SECCIÓN ANTERIORES ────────────────────────────
  setTextQ('#section-anteriores .section-header h1', t('anteriores_titulo'));
  setTextQ('#section-anteriores .section-header p',  t('anteriores_sub'));
  setText('btn-ir-comparar',     t('btn_comparar'));
  setText('btn-back-mes',        t('btn_volver'));
  setText('btn-back-comparar',   t('btn_volver'));
  setTextQ('#comparar-view h2',  t('comparar_titulo'));
  setTextQ('.comparar-vs',       t('comparar_vs'));
  setText('btn-comparar-cargar', t('btn_comparar_cargar'));

  // ── SECCIÓN REPORTE ───────────────────────────────
  setTextQ('#section-reporte .section-header h1', t('reporte_titulo'));
  setTextQ('#section-reporte .section-header p',  t('reporte_sub'));
  setText('btn-descargar-pdf', t('btn_pdf'));
  setText('btn-descargar-csv', t('btn_csv'));

  // ── SECCIÓN GRÁFICOS ──────────────────────────────
  setTextQ('#section-graficos .section-header h1', t('graficos_titulo'));
  setTextQ('#section-graficos .section-header p',  t('graficos_sub'));
  setText('btn-graf-cargar', t('btn_ver_graf'));
  setTextQ('#section-graficos .charts-grid .chart-card:nth-child(1) h3', t('graf_categoria'));
  setTextQ('#section-graficos .charts-grid .chart-card:nth-child(2) h3', t('graf_diario'));
  setTextQ('#section-graficos .charts-grid .chart-card:nth-child(3) h3', t('graf_evolucion'));

  // ── SECCIÓN PRESUPUESTOS ──────────────────────────
  setTextQ('#section-presupuestos .section-header h1', t('pres_titulo'));
  setTextQ('#section-presupuestos .section-header p',  t('pres_sub'));
  setText('btn-pres-cargar',  t('btn_ver_pres'));
  setText('btn-pres-guardar', t('btn_guardar_pres'));
  actualizarOpcionesCategorias('pres-cat');

  // ── MODAL EDITAR GASTO ────────────────────────────
  setTextQ('#edit-modal h3',    t('edit_titulo'));
  setText('btn-update',         t('btn_actualizar'));
  setText('btn-cancel-edit',    t('btn_cancelar'));
  actualizarOpcionesCategorias('e-categoria');

  // ── MODAL ELIMINAR ────────────────────────────────
  setTextQ('#delete-modal p',   t('del_texto'));
  setText('btn-delete-confirm', t('btn_eliminar'));
  setText('btn-delete-cancel',  t('btn_cancelar'));

  // ── MODAL PDF ─────────────────────────────────────
  setTextQ('#pass-modal h3',    t('pdf_titulo'));
  setPlaceholder('pdf-pass',    t('pdf_pass_ph'));
  setText('btn-pass-confirm',   t('btn_generar_pdf'));

  // ── MODAL DETALLE ─────────────────────────────────
  setTextQ('#detail-modal h3',  t('detail_titulo'));

  // ── BILLETERAS DRAWER ─────────────────────────────
  setTextQ('.wallet-drawer-title', t('wallet_titulo'));
  setTextQ('.wallet-drawer-sub',   t('wallet_sub'));
  setText('fab-add-billtera',      t('wallet_nueva'));

  // ── MODAL BILLTERA ────────────────────────────────
  setTextQ('.detail-label',        t('wallet_saldo'));
  setText('toggle-recargar',       t('wallet_recargar'));
  setText('toggle-restar',         t('wallet_restar'));
  setText('btn-recarga-manual',    t('wallet_agregar'));
  setText('btn-establecer-saldo',  t('wallet_establecer'));
  setText('btn-billtera-transferir', t('wallet_transferir'));
  setText('btn-billtera-eliminar', t('wallet_eliminar'));

  // ── MODAL NUEVA BILLTERA ──────────────────────────
  setTextQ('#nueva-billtera-modal h3', t('nueva_wallet_titulo'));
  setPlaceholder('nueva-billtera-nombre', t('nueva_wallet_nombre_ph'));
  setText('btn-crear-billtera',    t('btn_crear_billtera'));

  // ── MODAL TRANSFERIR ──────────────────────────────
  setTextQ('#transferir-modal h3', t('transferir_titulo'));
  setText('btn-transferir-confirmar', t('btn_transferir'));

  // ── MODAL EDITAR PRESUPUESTO ──────────────────────
  setTextQ('#edit-pres-modal h3',  t('edit_pres_titulo'));
  setText('btn-edit-pres-guardar', t('btn_guardar_edit'));
  setText('btn-edit-pres-cancelar',t('btn_cancelar'));

  // ── MODAL RECURRENTES ─────────────────────────────
  setTextQ('#recurrentes-modal h3', t('rec_titulo'));
  setPlaceholder('rec-nombre',     t('rec_nombre_ph'));
  setPlaceholder('rec-descripcion',t('rec_desc_ph'));
  setText('btn-crear-recurrente',  t('btn_guardar_rec'));
  actualizarOpcionesCategorias('rec-categoria');

  // ── MODAL REGISTRAR RECURRENTE ────────────────────
  setText('btn-rr-guardar',  t('btn_rr_guardar'));
  setText('btn-rr-cancelar', t('btn_rr_cancelar'));
  actualizarOpcionesCategorias('rr-categoria');

  // ── BANNER RECURRENTES ────────────────────────────
  setText('banner-btn-ver', t('banner_ver'));

  // ── PERFIL ────────────────────────────────────────
  setTextQ('#perfil-modal h3',     t('perfil_titulo'));
  setPlaceholder('perfil-nombre',  t('perfil_nombre_ph'));
  setText('btn-perfil-guardar',    t('btn_perfil_guardar'));
  setText('btn-perfil-cancelar',   t('btn_perfil_cancelar'));
  setText('btn-ver-actividad',     t('perfil_actividad'));

  // ── ACTIVIDAD ─────────────────────────────────────
  setTextQ('#actividad-modal h3',  t('actividad_titulo'));
  setTextQ('#actividad-modal > .modal-card > p', t('actividad_sub'));

  // ── SELECTOR DE IDIOMA ────────────────────────────
  const sel = document.getElementById('idioma-select');
  if (sel) sel.value = lang;
}

// ── Helpers ───────────────────────────────────────
function setText(id, txt) {
  const el = document.getElementById(id);
  if (el) el.textContent = txt;
}

function setTextQ(selector, txt) {
  const el = document.querySelector(selector);
  if (el) el.textContent = txt;
}

function setPlaceholder(id, txt) {
  const el = document.getElementById(id);
  if (el) el.placeholder = txt;
}

function setLabel(inputId, txt) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const label = input.closest('.field-group')?.querySelector('label');
  if (label) label.firstChild.textContent = txt;
}

function setNavLink(section, txt) {
  document.querySelectorAll(`[data-section="${section}"]`).forEach(el => {
    const label = el.querySelector('.bnav-label');
    if (label) return; // es bottom nav, se maneja en setBnavLabel
    el.textContent = txt;
  });
}

function setBnavLabel(section, txt) {
  const el = document.querySelector(`.bottom-nav-item[data-section="${section}"] .bnav-label`);
  if (el) el.textContent = txt;
}

function actualizarOpcionesCategorias(selectId, incluirTodas = false) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  sel.querySelectorAll('option').forEach(opt => {
    const map = {
      '': incluirTodas ? t('resumen_todas_cats') : t('cat_seleccionar'),
      'Comida': t('cat_comida'),
      'Food': t('cat_comida'),
      'Transporte': t('cat_transporte'),
      'Transport': t('cat_transporte'),
      'Entretenimiento': t('cat_entretenimiento'),
      'Entertainment': t('cat_entretenimiento'),
      'Ropa': t('cat_ropa'),
      'Clothing': t('cat_ropa'),
      'Otros': t('cat_otros'),
      'Other': t('cat_otros'),
    };
    if (map[opt.value] !== undefined) opt.textContent = map[opt.value];
    else if (opt.value === '') opt.textContent = incluirTodas ? t('resumen_todas_cats') : t('cat_seleccionar');
  });
}

// ═══════════════════════════════════════════════════
//  MONEDAS
// ═══════════════════════════════════════════════════

const MONEDAS = {
  COP: { 
    codigo: 'COP', 
    simbolo: '$',  
    locale: 'es-CO', 
    nombre: '🇨🇴 Peso colombiano',
    tasa: 1          // base
  },
  USD: { 
    codigo: 'USD', 
    simbolo: '$',  
    locale: 'en-US', 
    nombre: '🇺🇸 US Dollar',
    tasa: 3670       // 1 USD ≈ 3670 COP (usa el valor que prefieras)
  },
  EUR: { 
    codigo: 'EUR', 
    simbolo: '€',  
    locale: 'de-DE', 
    nombre: '🇪🇺 Euro',
    tasa: 4250       // 1 EUR ≈ 4250 COP
  },
  GBP: { 
    codigo: 'GBP', 
    simbolo: '£',  
    locale: 'en-GB', 
    nombre: '🇬🇧 British Pound',
    tasa: 4850       // 1 GBP ≈ 4850 COP
  },
};

let monedaActual = localStorage.getItem('gd_moneda') || 'COP';

function aplicarMoneda(codigo) {
  monedaActual = codigo;
  localStorage.setItem('gd_moneda', codigo);
  const sel = document.getElementById('moneda-select');
  if (sel) sel.value = codigo;
}

function fmtMoneda(n) {
  if (typeof n !== 'number' || isNaN(n)) n = 0;

  const m = MONEDAS[monedaActual] || MONEDAS.COP;

  // Si es COP → mostrar directamente
  if (monedaActual === 'COP') {
    return new Intl.NumberFormat(m.locale, {
      style: 'currency',
      currency: m.codigo,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(n);
  }

  // Para otras monedas → convertir de COP a la moneda seleccionada
  const montoConvertido = n / m.tasa;

  return new Intl.NumberFormat(m.locale, {
    style: 'currency',
    currency: m.codigo,
    minimumFractionDigits: monedaActual === 'USD' || monedaActual === 'EUR' || monedaActual === 'GBP' ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(montoConvertido);
}